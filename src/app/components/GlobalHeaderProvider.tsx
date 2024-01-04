"use client";

import React, { useState } from "react";
import Header from "./Header";
import { getTheme } from "@/palette";
import { ThemeProvider, createTheme } from "@mui/material";
import Footer from "./Footer";
import { HeaderProps } from "../props";

const GlobalHeaderProvider = ({
  children,
  sections,
}: {
  children: React.ReactNode;
  sections: HeaderProps["sections"];
}) => {
  const [themePrefered, setThemePrefered] = useState<"light" | "dark">("dark");
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
