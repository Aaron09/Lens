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
            <li className="storeNavButton">
              <a href="/store"> Store </a>
            </li>
            <li className="editNavButton"> 
              <a href="/edit"> Edit </a>
            </li>
            <li className="shareNavButton">
              <a href="/share"> Share </a>
            </li>
            <li className="loginNavButton">
              <a href="/login"> Login </a>
            </li>
            <li className="signUpNavButton">
              <a href="/signup"> Sign Up </a>
            </li>
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

