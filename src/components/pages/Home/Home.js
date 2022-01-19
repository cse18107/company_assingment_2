import React, { useState, useEffect } from "react";
import CardModel from "../../UI/CardModel";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [shows, setShows] = useState([]);

  const getAllShows = async () => {
    try {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await res.json();
      console.log(data[0].show.id);
      setShows(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllShows();
  }, []);

  return (
    <div className="home_body">
      <div className="home_container">
        <div className="home_content">
          {shows.map((show) => {
            return (
                <CardModel show={show.show}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
