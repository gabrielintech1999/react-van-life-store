// This component is for the skeleton

import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function HostLayout() {
  return (
    <div>
      <nav>
        <ul>
          <Link to=".">Host</Link>
          <Link to="income">Income</Link>
          <Link to="vans">Vans</Link>
          <Link to="reviews">Reviews</Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
