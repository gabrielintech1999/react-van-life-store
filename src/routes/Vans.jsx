import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3000/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data);
        console.log(data);
      });
  }, []);

  if (vans.length === 0) return <div>Loading...</div>;
  return (
    <div className="card-grid">
      {vans.map((van) => (
        <div className="card" key={van.id}>
          <Link to={`/vans/${van.id}`}>{van.name}</Link>
        </div>
      ))}
    </div>
  );
}
