#!/bin/bash

# Diretório da aplicação
APP_DIR="/var/www/lp.connectagroup.tech"

echo "Iniciando deploy..."

# Entrar no diretório da aplicação
cd $APP_DIR

# Fazer backup da versão atual
echo "Fazendo backup da versão atual..."
if [ -d ".next" ]; then
    tar -czf backup_$(date +%Y%m%d_%H%M%S).tar.gz .next package.json package-lock.json
fi

# Instalar dependências
echo "Instalando dependências..."
npm install

# Fazer build da aplicação
echo "Fazendo build da aplicação..."
npm run build

# Reiniciar a aplicação
echo "Reiniciando a aplicação..."
pm2 restart connecta-ia

echo "Deploy concluído!"
echo "Verifique o status da aplicação: pm2 status"
echo "Verifique os logs: pm2 logs connecta-ia" 