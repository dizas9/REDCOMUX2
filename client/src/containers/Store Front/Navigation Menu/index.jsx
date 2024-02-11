import React from "react";
import SubMenuList from "./Menu.json";
import { Typography, Box, Button, Toolbar } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

export const BrandList = ({ handleMenuItemClick }) => {
  const BrandList = SubMenuList.Brands;

  const firstHalf = BrandList?.slice(0, 4);
  const SecondHalf = BrandList?.slice(4);

  return (
    <>
      <Box
        position={"absolute"}
        top={"3rem"}
        display={"flex"}
        flexDirection={"column"}
        bgcolor={"yellow"}
      >
        <Typography variant="h6" color="initial">
          Search By Brands
        </Typography>

        <Box display={"flex"}>
          <Toolbar
            sx={{
              display: { lg: "flex" },
              flexDirection: { lg: "column" },
            }}
          >
            {firstHalf.map((item) => (
              <Button variant="text" color="primary" key={item.id}>
                {item.name}
              </Button>
            ))}
          </Toolbar>

          <Toolbar
            sx={{
              display: { lg: "flex" },
              flexDirection: { lg: "column" },
            }}
          >
            {SecondHalf.map((item) => (
              <Button
                variant="text"
                color="primary"
                key={item.id}
                onClick={() => handleMenuItemClick(item)}
              >
                {item.name}
              </Button>
            ))}
          </Toolbar>
        </Box>
      </Box>
    </>
  );
};

export const AccountOption = () => {
  return (
    <>
      <Box
        position={"absolute"}
        top={"3rem"}
        display={"flex"}
        flexDirection={"column"}
        bgcolor={"yellow"}
      >
        <Box display={"flex"}>
          <Toolbar
            sx={{
              display: { lg: "flex" },
              flexDirection: { lg: "column" },
            }}
          >
            {SubMenuList.Accounts.map((item) => (
              <Button variant="text" color="primary" key={item.id}>
                <NavLink to={item.link}>{item.name}</NavLink>
              </Button>
            ))}
          </Toolbar>
        </Box>
      </Box>
    </>
  );
};
