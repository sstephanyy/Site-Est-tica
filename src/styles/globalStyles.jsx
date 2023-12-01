import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Poppins:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --brown-100: #694A38;
    --brown-200: #694A38A6;
    --gray: #7a7a7a;
    --beige-100: #faf7f7;
    --beige-200: #e8ccbe;
    --beige-300: #e6c8b8;
    --white: #ffff;

    --font-fraunces: 'Fraunces', sans-serif;
    --font-poppins: 'Poppins', sans-serif;

    --font-fraunces-title: 46px;
    --font-fraunces-subtitle: 17px;

    --font-text: 12px;

    --font-text-secondary: 15px;
  }

  body {
    min-height: 100vh;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  ul{
    list-style: none;
  }

  .container{
    width: 100%;
    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;
  }

`;

export default GlobalStyles;
