"use client";
import { getTheme } from "@/palette";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import Header from "../components/Header";

export default function InnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [themePrefered, setThemePrefered] = useState<"light" | "dark">("light");
  const theme = createTheme(getTheme(themePrefered));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        theme={theme}
        themeSelected={themePrefered}
        setThemeSelected={setThemePrefered}
      />
      {children}
    </ThemeProvider>
  );
}
