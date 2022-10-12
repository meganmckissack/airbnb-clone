import React from 'react';
import './../App.css';
import NavBar from './Nav';
import Card from './Card';
import data from "./data";

function App() {
  const cards = data.map(item => {
    return ( 
      <Card 
        img={item.img}
        location={item.location}
        description={item.description}
      />
    )
  })
  return (
    <React.Fragment>
    <NavBar />
    {cards}
    </React.Fragment>
  );
}

export default App;
