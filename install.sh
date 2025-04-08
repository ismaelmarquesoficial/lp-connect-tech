#!/bin/bash

# Atualizar sistema
echo "Atualizando sistema..."
sudo apt update && sudo apt upgrade -y

# Instalar Node.js
echo "Instalando Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Instalar Nginx
echo "Instalando Nginx..."
sudo apt install -y nginx

# Instalar PM2 globalmente
echo "Instalando PM2..."
sudo npm install -g pm2

# Configurar firewall
echo "Configurando firewall..."
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw --force enable

# Criar diretório da aplicação
echo "Criando diretório da aplicação..."
sudo mkdir -p /var/www/lp.connectagroup.tech
sudo chown -R $USER:$USER /var/www/lp.connectagroup.tech

# Configurar Nginx
echo "Configurando Nginx..."
sudo tee /etc/nginx/sites-available/lp.connectagroup.tech << 'EOF'
server {
    listen 80;
    server_name lp.connectagroup.tech www.lp.connectagroup.tech;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
EOF

# Ativar site no Nginx
echo "Ativando site no Nginx..."
sudo ln -s /etc/nginx/sites-available/lp.connectagroup.tech /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Configurar SSL com Certbot
echo "Instalando Certbot para SSL..."
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d lp.connectagroup.tech -d www.lp.connectagroup.tech

# Criar arquivo de configuração do PM2
echo "Configurando PM2..."
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'connecta-ia',
    script: 'server.js',
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
EOF

# Instalar dependências e iniciar aplicação
echo "Instalando dependências e iniciando aplicação..."
cd /var/www/lp.connectagroup.tech
npm install --production
pm2 start ecosystem.config.js
pm2 startup
pm2 save

echo "Instalação concluída!"
echo "Verifique se o domínio lp.connectagroup.tech está apontando para o IP desta VPS"
echo "Para verificar o status da aplicação, use: pm2 status"
echo "Para ver os logs, use: pm2 logs connecta-ia" 