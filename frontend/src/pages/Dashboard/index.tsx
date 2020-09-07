import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

interface Spot {
  _id: number;
  thumbnail: string;
  thumbnail_url: string;
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
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
            <strong>{spot.company}</strong>
            <span>{spot.price ? `R$ ${spot.price}/dia` : "Grátis"}</span>
          </li>
        ))}
      </ul>

      <Link to="/new">
        <button className="btn">Cadastrar novo spot</button>
      </Link>
    </>
  );
};

export default Dashboard;
