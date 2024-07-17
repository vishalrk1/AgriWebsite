import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.main};
    /* background-color: ${(props) => props.theme.colors.neutral.lightGrey};
    color: ${(props) => props.theme.colors.text}; */
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
