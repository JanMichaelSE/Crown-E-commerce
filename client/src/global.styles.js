import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 50px;
  
    @media screen and (max-width: 800px) {
      padding: 10px !important;
    }
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
`;
