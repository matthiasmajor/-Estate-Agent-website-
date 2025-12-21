import * as React from "react";
import { theme } from "../assets/theme";
import { GlobalStyle } from "../assets/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";
import { Helmet } from "react-helmet";

export const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Helmet>
          <meta
            name="google-site-verification"
            content="5xu-TJ1kZ4N1b_jfyFXQM_j_gJxxj7k-BHPfHo7VEtg"
          />
        </Helmet>
        <Navigation />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};
