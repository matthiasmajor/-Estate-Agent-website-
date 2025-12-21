import * as React from "react";
import { theme } from "../assets/theme";
import { GlobalStyle } from "../assets/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";

export const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <head>
          <meta
            name="google-site-verification"
            content="5xu-TJ1kZ4N1b_jfyFXQM_j_gJxxj7k-BHPfHo7VEtg"
          />
        </head>
        <Navigation />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};
