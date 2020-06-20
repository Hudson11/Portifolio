import { createGlobalStyle } from 'styled-components';

export default  createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    background-color: #fff;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }
`;