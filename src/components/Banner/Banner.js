import React from "react";
import "./Banner.css";
import joker from "./joker1.jpg"

function Banner({ fetchTrendingMovies }) {
  
  return (
    <div className="joker-container">
      <div className="joker-text-container">
        <div className="joker-text">
          <h1>Watch Joker Now</h1>
          <p className="joker-overview-text">Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.</p>
        </div>
      </div>
      <img src={joker} className="joker-image" />
    </div>
  );
}

export default Banner;
