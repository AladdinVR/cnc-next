"use client";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import LanguageSelector from "./LanguageSelector";
import {
  createTheme,
  CssBaseline,
  Paper,
  Theme,
  ThemeOptions,
  ThemeProvider,
  Button,
  Menu,
  MenuItem,
  Switch,
} from "@mui/material";
import Image from "next/image";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { useEffect, useState } from "react";
import { HeaderProps } from "../props";
import { usePathname, useRouter } from "../../navigation";
import { useLocale } from "next-intl";

const Header = (props: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [isWindowAvailable, setIsWindowAvailable] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    setIsWindowAvailable(true);
  }, []);
  const router = useRouter();
  const pathname = usePathname();
  const innerThemeOptions: ThemeOptions = {
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            position: "sticky",
            top: "0px",
            marginBottom: "30px",
            zIndex: "10",
            backgroundColor: props.theme.palette.background.default,
            boxShadow:
              props.themeSelected === "dark"
                ? "0 1px 6px 1px rgba(255,255,255,0.25)"
                : "0 1px 6px 1px rgba(0,0,0,0.12)",
          },
        },
      },
    },
  };
  const smallSizeLimit = 1000;
  const nav = () => {
    return props.sections.map((section, index) => (
      <MenuItem key={section.title}>
        <Link
          color="inherit"
          key={section.title}
          variant="body2"
          fontWeight={pathname.includes(section.dest) ? "Bold" : "14px"}
          onClick={() => {
            router.push(`/${section.dest}`);
          }}
          sx={{ p: 1, flexShrink: 0 }}
          style={{ cursor: "pointer " }}
        >
          {section.title}
        </Link>
      </MenuItem>
    ));
  };
  return (
    isWindowAvailable && (
      <>
        <CssBaseline />
        <ThemeProvider
          theme={(theme: Theme) => createTheme(theme, innerThemeOptions)}
        >
          <Paper elevation={5} square>
            <Toolbar
              component="nav"
              variant="dense"
              sx={
                window.innerWidth < smallSizeLimit
                  ? { justifyContent: "space-between", overflowX: "auto" }
                  : { justifyContent: "space-around", overflowX: "auto" }
              }
            >
              <div
                style={{
                  position: "relative",
                  width:
                    window.innerWidth > window.innerHeight ? "5vw" : "10vh",
                  height:
                    window.innerWidth < window.innerHeight ? "10vh" : "5vw",
                }}
              >
                <Image
                  fill
                  src="/favicon.ico"
                  alt="Club's logo"
                  className="favicon"
                  sizes="maxWidth: 100%; width: auto; height: auto"
                />
              </div>
              {window.innerWidth > smallSizeLimit && nav()}
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ alignItems: "flex-end" }}
              >
                <MenuIcon sx={{ marginRight: "10px" }} />
                Menu
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {window.innerWidth < smallSizeLimit && nav()}
                <MenuItem>
                  <LanguageSelector />
                </MenuItem>
                <MenuItem sx={{ flexDirection: "row-reverse" }}>
                  <Switch
                    onClick={() => {
                      props.setThemeSelected((theme) =>
                        theme === "light" ? "dark" : "light"
                      );
                    }}
                    checkedIcon={<Brightness3Icon sx={{ marginTop: "-5%" }} />}
                    icon={
                      <BrightnessHighIcon
                        sx={{ color: "#ffc107", marginTop: "-5%" }}
                      />
                    }
                    checked={props.themeSelected === "dark"}
                    size="medium"
                  />
                </MenuItem>
              </Menu>
            </Toolbar>
          </Paper>
        </ThemeProvider>
      </>
    )
  );
};

export default Header;
