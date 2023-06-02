import React, { useEffect, useState } from "react";
import Card from "../../components/MovieCard/Card";
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar/navbar'
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (item) => {
    navigate(`/show/${item.show.id}?data=${encodeURIComponent(JSON.stringify(item))}`);
  };

  return (
    <>
    <Navbar/>
    <div className="allCardsContain">
      {shows.map((item, index) => (
        <div
          onClick={() => handleCardClick(item)}
          style={{ cursor: "pointer" }}
          key={item.show.id}
        >
          <Card data={item} />
        </div>
      ))}
    </div>
    </>
  );
}

export default Home;
