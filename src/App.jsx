import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import About from "./routes/About";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}


