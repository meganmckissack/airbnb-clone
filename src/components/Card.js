import React from "react";
import craterLake from "../img/crater-lake.jpg";

function Card() {
  return (
    <React.Fragment>
      <div className="card">
        <img className="card-img" src={craterLake} alt="crater lake"/>
        <div className="cardText">
        <p>Crater Lake</p>
        <p>National Park</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Card;