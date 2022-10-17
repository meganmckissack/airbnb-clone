import React from "react";


function Card(props) {
  return (
    <React.Fragment>
      <div className="card">
        <img className="card-img" src={props.item.img} alt="crater lake"/>
        <div className="cardText">
        <p>{props.item.location}</p>
        <p>{props.item.description}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Card;