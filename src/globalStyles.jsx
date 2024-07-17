import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
  body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.main};
    /* background-color: ${(props) => props.theme.colors.neutral.lightGrey};
    color: ${(props) => props.theme.colors.text}; */
  }

  p {
    font-family: 'Open Sans', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
