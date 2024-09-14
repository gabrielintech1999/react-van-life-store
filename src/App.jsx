import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import RootLayout from "./RootLayout";
import About from "./routes/About";
import Vans from "./routes/vans/Vans";
import VanDetail from "./routes/vans/VanDetail";
import DashBoard from "./routes/host/DashBoard";
import Income from "./routes/host/Income";
import Reviews from "./routes/host/Reviews";
import HostVan from "./routes/host/HostVans";
import HostLayout from "./routes/host/HostLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans/:vanId" element={<VanDetail />} />
          <Route path="vans" element={<Vans />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<DashBoard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVan />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
