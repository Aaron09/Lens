import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'react-bootstrap';
import { Nav } from "react-bootstrap";
import { NavItem } from "react-bootstrap";

import "./index.css";

class Home extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div className="homeButton">
          <Nav className="homeNav" bsStyle="pills">
          <NavItem href="/">
            <span className="homeNavButton">SmartEdit</span>
          </NavItem>
          </Nav>
        </div>
        <Nav className="navigationBar" bsStyle="pills" pullRight>
          <NavItem href="/store"> 
            <span className="storeNavButton">Store</span>
          </NavItem>
          <NavItem href="/edit"> 
            <span className="editNavButton">Edit</span>
          </NavItem>
          <NavItem href="/share"> 
            <span className="shareNavButton">Share</span>
          </NavItem>
          <NavItem href="/login"> 
            <span className="loginNavButton">Login</span>
          </NavItem>
          <NavItem href="/signup"> 
            <span className="signUpNavButton">Sign Up</span>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

////////

ReactDOM.render(
  <Home />,
  document.getElementById("root")
);

