import React from "react";
import Navbar from "./components/NavBar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
