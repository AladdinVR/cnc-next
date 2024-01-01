"use client";

import React, { useState } from "react";
import Header from "./Header";
import { getTheme } from "@/palette";
import { ThemeProvider, createTheme } from "@mui/material";

const GlobalHeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [themePrefered, setThemePrefered] = useState<"light" | "dark">("light");
  const theme = createTheme(getTheme(themePrefered));
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header
          theme={theme}
          themeSelected={themePrefered}
          setThemeSelected={setThemePrefered}
        />
        {children}
      </ThemeProvider>
    </div>
  );
};

export default GlobalHeaderProvider;
