import React, { useState } from "react";
import { Drawer, ListItem, ListItemText } from "@material-ui/core";
import { Toolbar, IconButton, Typography } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import SubMenuList from "../Navigation Menu/Menu.json";

export default function DrawerIcon() {
  const Submenu = SubMenuList.Brands;
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const getList = () => {
    return (
      <Toolbar sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="caption"
          color="initial"
          sx={{paddingTop:{lg:"5rem", xs:"2rem"}, paddingBottom:{lg:"3rem" , xs:"1rem"}}}
        >
          Hi! Sazidul
        </Typography>

        <Typography variant="h5" color="initial">
          Brands
        </Typography>
        {Submenu.map((item) => (
          <ListItem button key={item.id}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </Toolbar>
    );
  };

  return (
    <>
      <IconButton color="inherit" onClick={toggleDrawer}>
        <MenuRoundedIcon />
      </IconButton>

      <Drawer
        open={openDrawer}
        anchor={"left"}
        onClose={() => setOpenDrawer(false)}
      >
        <IconButton onClick={() => setOpenDrawer(false)}>
          <ClearRoundedIcon />
        </IconButton>
        {getList()}
      </Drawer>
    </>
  );
}
