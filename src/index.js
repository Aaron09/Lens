import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'react-bootstrap';
import { Nav } from "react-bootstrap";
import { NavItem } from "react-bootstrap";

import "./index.css";

class Home extends React.Component {
  render() {
    return (
       <Nav className="navigationBar" bsStyle="pills">
        <ul className="nav">
          <div className="leftSideButtons">
            <li className="homeNavButton">
               <a href="/"> PhotoBin </a>
            </li>          
          </div>
          <div className="rightSideButtons">
            <li className="storeNavButton" href="/store">Store</li>
            <li className="editNavButton" href="/edit">Edit</li>
            <li className="shareNavButton" href="/share">Share</li>
            <li className="loginNavButton" href="/login">Login</li>
            <li className="signUpNavButton" href="/signup">Sign Up</li>
          </div>
        </ul>
      </Nav>
    );
  }
}

////////

ReactDOM.render(
  <Home />,
  document.getElementById("root")
);

