import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'react-bootstrap';
import { Nav } from "react-bootstrap";
import { NavItem } from "react-bootstrap";
import { Form } from "react-bootstrap"
import { FormGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { ControlLabel } from "react-bootstrap";


import "./index.css";

class BackgroundImage extends React.Component {
  render() {
    return (
      <img src="indexBackgroundChicago.jpeg" className="backgroundImage" />
    );
  }
}

class Navigation extends React.Component {
  render() {
    return (
       <Nav className="navigationBar" bsStyle="pills">
        <ul className="nav">
          <div className="leftSideButtons">
            <li className="homeNavButton">
               <a href="/"> Lens </a>
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

class Slogan extends React.Component {
  render() {
    return (
        <div className="slogan">
          <h7> The world, the way you want to see it. </h7>
        </div>
    );
  }
}

class LoginForm extends React.Component {
  render() {
    return (
      <Form horizontal className="loginForm">
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className="homeParent">
        <BackgroundImage />
        <Navigation />
        <Slogan />
        <LoginForm />
      </div>
    );
  }
}

////////

ReactDOM.render(
  <Home />,
  document.getElementById("root")
);

