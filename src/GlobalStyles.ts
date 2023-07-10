import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;

    --gray-500: #808080;
    --gray-700: #292929;
    --gray-900: #000000;

    --blue-700: #8a2be2;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: var(--gray-700);
    color: var(--white);
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
 
export default GlobalStyle;
