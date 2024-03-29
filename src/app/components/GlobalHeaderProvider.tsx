"use client";

import React, { useState } from "react";
import Header from "./Header";
import { getTheme } from "@/palette";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import Footer from "./Footer";
import { HeaderProps } from "../props";

const GlobalHeaderProvider = ({
  children,
  sections,
}: {
  children: React.ReactNode;
  sections: HeaderProps["sections"];
}) => {
  const darkThemePrefered = useMediaQuery(
    "@media (prefers-color-scheme: dark)"
  );
  const [themePrefered, setThemePrefered] = useState<"light" | "dark">(
    darkThemePrefered ? "dark" : "light"
  );
  const theme = createTheme(getTheme(themePrefered));

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header
          theme={theme}
          themeSelected={themePrefered}
          setThemeSelected={setThemePrefered}
          sections={sections}
        />
        {children}
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default GlobalHeaderProvider;
