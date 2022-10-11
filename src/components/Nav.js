import React from "react";
import logo from './../img/airbnb.png';

function NavBar() {
  return (
    <React.Fragment>
      <nav className="nav">
      <img className="logo" src={logo} alt="airbnb logo"/>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;

