import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import RootLayout from "./RootLayout";
import About from "./routes/About";
import Vans from "./routes/vans/Vans";
import VanDetail from "./routes/vans/VanDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans/:vanId" element={<VanDetail />} />
          <Route path="/vans" element={<Vans />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
