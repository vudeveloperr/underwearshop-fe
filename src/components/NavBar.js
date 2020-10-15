import React, { Component } from "react";

import ProfilePanel from "./ProfilePanel";
import Home from "./Home";
import Shop from "./Shop";
// import About from "./About";
import Cart from "./Cart";

// import Contact from "./Contact";
import logo from "../img/Logo.png";
import { Link } from "react-router-dom";
import "../style/NavBar.css"
import About from "./About";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand">
        <div className="container">
          <div className="col-5 text-center">
            <Link to="/">
              <img src={logo} className="logo" alt="KVT Logo" />
            </Link>
          </div >
          <Home />
          <Shop />
          <About />
          <Cart />
          <ProfilePanel
            username={this.props.username}
            onLogin={this.props.onLogin}
          />
        </div>
      </div>
    );
  }
}

export default NavBar;
