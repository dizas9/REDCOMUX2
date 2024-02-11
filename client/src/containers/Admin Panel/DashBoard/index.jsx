import React from "react";
import { Routes, Route } from "react-router-dom";
import SideMenu from "../SideBar Menu";
import {Typography} from '@mui/material'

export default function DashBoard() {
  return (
    <>
      <Typography variant="h4" color={"#7b7b78"} sx={{margin:"0.5rem"}}>
        Dashboard
      </Typography>
      <SideMenu />
    </>
  );
}
