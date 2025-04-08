import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
    overflow-x: hidden;
    scroll-padding-top: 0;
    position: relative;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    overflow-y: auto;
  }

  #root {
    min-height: 100vh;
    position: relative;
  }

  button {
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(139, 69, 19, 0.1);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary}, #8B4513);
    border-radius: 5px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg, ${({ theme }) => theme.colors.primaryLight}, #A0522D);
  }
`;

export default GlobalStyles;