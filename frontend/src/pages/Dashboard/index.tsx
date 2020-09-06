import React, { useEffect, useState } from "react";
import api from "../../services/api";

interface Spot {
  _id: number;
  thumbnail: string;
  company: string;
  price: number;
  techs: [string];
}

const Dashboard = () => {
  const [spots, setSpots] = useState<Spot[]>([]);

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem("user");
      const response = await api.get("/dashboard", {
        headers: {
          user_id,
        },
      });
      setSpots(response.data);
    }
    loadSpots();
  }, []);

  return (
    <>
      <ul className="spot-list">
        {spots.map((spot: Spot) => (
          <li key={spot._id}>
            <header />
            <strong>{spot.company}</strong>
            <span>{spot.price}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dashboard;
