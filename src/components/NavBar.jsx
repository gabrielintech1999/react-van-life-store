import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
      <nav>
        <h1>
          {" "}
          <Link to="/">VanLife</Link>
        </h1>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </ul>
      </nav>
    );
  }
