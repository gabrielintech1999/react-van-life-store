import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function Home() {
  return <div>Home Page</div>;
}

function About() {
  return <div>About Page</div>;
}

function NavBar() {
  return (
    <nav>
      <h1>
        {" "}
        <Link to="/">VanLife</Link>
      </h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </ul>
    </nav>
  );
}
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
