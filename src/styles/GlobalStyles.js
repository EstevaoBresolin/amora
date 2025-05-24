// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #FF6B6B;
    --secondary: #FFD166;
    --dark: #2C3E50;
    --light: #FFFFFF;
    --background: #F8F9FA;
    --gray: #ADB5BD;
    --success: #06D6A0;
    --warning: #FFD166;
    --danger: #EF476F;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background);
    color: var(--dark);
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;