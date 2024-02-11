import React from "react";
import { Routes, Route } from "react-router-dom";
import Page404 from "../../../components/Website/Page404/index";
import Notfound from "../../../components/Website/NotFound/index";
import NavigationBar from "../Navigation Bar/index";
import DashBoard from "../../Admin Panel/DashBoard";
import UserRegistration from "../User Registration";

export default function Application() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/page404" element={<Page404 />} />
        <Route path="/notfound" element={<Notfound />} />
        <Route path="/dashboaed/home" element={<DashBoard />} />
        <Route path="/page/Register" element={<UserRegistration />} />
      </Routes>
    </div>
  );
}
