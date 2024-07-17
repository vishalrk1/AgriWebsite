// src/ThemeProvider.js
import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "../theme";
import GlobalStyles from "../globalStyles";

const ThemeProvider = ({ children }) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
    </StyledThemeProvider>
);

export default ThemeProvider;
