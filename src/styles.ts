import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    list-style: none;
  }

  body {
    padding-bottom: 120px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  @media(max-width: 1024px) {
    .container {
      max-width: 80%;
    }
  }
`;

export const colors = {
  principal: '#a7727d',
  secondary: '#f9f5e7'
};

export default GlobalStyle;
