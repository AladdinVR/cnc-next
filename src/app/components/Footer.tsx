"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import {
  createTheme,
  CssBaseline,
  Paper,
  Theme,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";

const innerThemeOptions: ThemeOptions = {
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "0px",
          marginTop: "20px",
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#fadd68",
        },
      },
    },
  },
};
const Footer = () => {
  const t = (test: string) => {
    return test;
  };
  const social = [
    {
      name: "Instagram",
      icon: InstagramIcon,
      href: "https://instagram.com/cnceret?igshid=YmMyMTA2M2Y=",
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
      href: "https://www.facebook.com/groups/1412989372362603/?ref=share",
    },
    { name: "Mail", icon: EmailIcon, href: "mailto:cnc66400@gmail.com" },
  ];

  return (
    <>
      <CssBaseline />
      <ThemeProvider
        theme={(theme: Theme) => createTheme(theme, innerThemeOptions)}
      >
        <Paper style={{ minHeight: "10vh" }}>
          <Typography variant="h6" align="center" gutterBottom>
            {t("networks")}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
          >
            {social.map((network) => (
              <Link
                display="block"
                variant="body1"
                href={network.href}
                key={network.name}
                sx={{ mb: 0.5 }}
              >
                <network.icon />
              </Link>
            ))}
          </Stack>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default Footer;
