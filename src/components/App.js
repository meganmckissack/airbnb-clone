import React from 'react';
import './../App.css';
import NavBar from './Nav';
import Card from './Card';
import data from "./data";

function App() {
  const cards = data.map(item => {
    return ( 
      <Card 
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <React.Fragment>
    <NavBar />
    <section className="cards-list">
    {cards}
    </section>
    </React.Fragment>
  );
}

export default App;
