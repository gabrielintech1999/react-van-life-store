import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import About from "./routes/About";
import Vans from "./routes/Vans";

export default function App() {

  React.useEffect(() => {
    fetch("http://localhost:3000/vans")
      .then(res => res.json())
      .then(data => console.log(data));
  }, [])
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}


