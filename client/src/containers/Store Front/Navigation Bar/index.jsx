import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../components/Website/Logo/index";
import { AccountOption, BrandList } from "../Navigation Menu/index";
import DrawerIcon from "../Drawer/index";

export default function NavigationBar() {
  const [menuClick, setMenuClick] = useState(false);
  const [item, setItem] = useState(false);
  const location = useLocation();

  const handleMenuItemClick = (menuItem, event) => {
    setItem(menuItem);
    setMenuClick((prevState) => !prevState);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <DrawerIcon/>

          <Logo />
          <Box sx={{ marginLeft: "50vw", display: { xs: "none", lg: "flex" } }}>
            <Button
              color="inherit"
              LinkComponent={Link}
              to=""
              onClick={(e) => handleMenuItemClick("brands", e)}
            >
              Brands
              {menuClick && item === "brands" ? (
                <KeyboardControlKeyIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
              {menuClick && item === "brands" && <BrandList />}
            </Button>

            <Button color="inherit" LinkComponent={Link} to="">
              Shop
            </Button>

            <Button
              color="inherit"
              LinkComponent={Link}
              to=""
              onClick={(e) => handleMenuItemClick("account", e)}
            >
              Welcome!
              {menuClick && item === "account" ? (
                <KeyboardControlKeyIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
              {menuClick && item === "account" && <AccountOption />}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
