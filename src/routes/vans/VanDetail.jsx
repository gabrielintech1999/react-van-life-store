import React from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const [van, setVan] = React.useState(null);
  const { vanId } = useParams();
  const [count, setcount] = React.useState(Number(vanId));
  React.useEffect(() => {
    fetch(`http://localhost:3000/vans/${count}`)
      .then((res) => res.json())
      .then((data) => {
        setVan(data);
        console.log(data);
      });
  }, [count]);
  if (van === null) return <div>Loading...</div>;
  return (
    <div className="card-grid">
      <div className="card">
        <div className="card-name">{van.name}</div>
        <div className="card-description">{van.description}</div>
        <button onClick={() => setcount(count + 1)}>increment</button>
        {count}
      </div>
    </div>
  );
}
