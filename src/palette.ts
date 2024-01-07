import { Paper, ThemeOptions } from "@mui/material";

export function getTheme(themeSelected: string) {
  let palette: ThemeOptions["palette"];
  if (themeSelected === "light") {
    palette = {
      primary: {
        main: "#303030",
      },
      secondary: {
        main: "#ffc107",
        contrastText: "#001e3c",
      },
      background: {
        default: "#fff",
        paper: "#1769aa",
      },
      text: {
        primary: "rgba(33,33,33,1)",
        secondary: "rgba(33,33,33,0.58)",
        disabled: "rgba(33,33,33,0.4)",
      },
    };
  } else {
    palette = {
      primary: {
        main: "#fefefe",
      },
      secondary: {
        main: "#fadd68",
        contrastText: "#1769aa",
      },
      background: {
        default: "#0a1929",
        paper: "#001e3c",
      },
      text: {
        primary: "rgba(240,240,240,1)",
        secondary: "rgba(240,240,240,0.58)",
        disabled: "rgba(240,240,240,0.4)",
      },
    };
  }

  const themeOptions: ThemeOptions = {
    palette,
    typography: {
      h1: {
        fontWeight: 400,
        fontSize: "2.5rem",
      },
      h2: {
        fontWeight: 300,
        fontSize: "2rem",
      },
      h3: {
        fontWeight: 250,
        fontSize: "1.5rem",
      },
      body1: {
        fontSize: "1rem",
      },
      allVariants: {
        textAlign: "left",
        fontFamily: "Lato",
        whiteSpace: "break-spaces !important",
      },
    },
    shape: {
      borderRadius: 10,
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            minHeight: "100vh",
          },
        },
      },
      MuiSvgIcon: {
        defaultProps: {
          color: "secondary",
        },
      },
      MuiMenuItem: {
        defaultProps: {
          color: "secondary",
        },
      },
      MuiButtonBase: {
        defaultProps: {
          color: "secondary",
        },
      },
      MuiTable: {
        defaultProps: {
          component: Paper,
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderColor: "#fadd68",
            verticalAlign: "baseline",
            border: "1px solid",
            color: "whitesmoke",
            maxWidth: "20%",
            minWidth: "200px",
            whiteSpace: "break-spaces",
          },
        },
      },
    },
  };
  return themeOptions;
}
