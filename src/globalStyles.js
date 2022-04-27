import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
      font-family: 'Barlow', sans-serif;
      overflow-x: hidden;
      color: #525E75;
      
  }

  html {
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
