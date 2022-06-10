import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital@1&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.font};
    font-family: 'Open Sans', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }

`;

export default GlobalStyles;
