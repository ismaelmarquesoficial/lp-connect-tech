# LP Connect Tech

Landing page para o serviço de IA no WhatsApp da Connect Tech.

## Estrutura do Projeto

```
lp-connect-tech/
├── assets/           # Imagens e outros recursos
├── components/       # Componentes HTML
├── js/              # Arquivos JavaScript
│   ├── global.js    # Funcionalidades globais
│   └── main.js      # Script principal
├── styles/          # Arquivos CSS
│   └── global.css   # Estilos globais
└── index.html       # Página principal
```

## Requisitos

- Navegador web moderno com suporte a:
  - CSS Grid e Flexbox
  - CSS Variables
  - Intersection Observer API
  - ES6+ JavaScript

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/lp-connect-tech.git
cd lp-connect-tech
```

2. Abra o arquivo `index.html` em seu navegador ou use um servidor local.

Para usar um servidor local, você pode usar o Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Ou usar o Node.js com o pacote `http-server`:
```bash
npm install -g http-server
http-server
```

## Desenvolvimento

### Estrutura de Componentes

Cada componente está em um arquivo HTML separado na pasta `components/`. Os componentes são carregados dinamicamente via JavaScript.

### Estilos

- `styles/global.css`: Contém estilos globais e variáveis CSS
- Cada componente pode ter seus próprios estilos inline

### JavaScript

- `js/global.js`: Contém funcionalidades compartilhadas como:
  - Animações no scroll
  - Scroll suave
  - Menu ativo
  - Botão de scroll para o topo
- `js/main.js`: Script principal que carrega os componentes

## Personalização

### Cores

As cores principais podem ser alteradas editando as variáveis CSS em `styles/global.css`:

```css
:root {
    --primary-color: rgb(194, 39, 60);
    --background-color: #000;
    --text-color: #fff;
    --text-color-transparent: rgba(255, 255, 255, 0.7);
    --border-color: rgba(255, 255, 255, 0.1);
}
```

### Componentes

Para modificar um componente, edite o arquivo correspondente na pasta `components/`.

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Crie um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
