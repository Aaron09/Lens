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

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"


import "./index.css";

/**
 * Background Image
 */
class BackgroundImage extends React.Component {
  render() {
    return (
      <img src="images/backgrounds/indexBackgroundChicago.jpeg" className="backgroundImage" />
    );
  }
}

/**
 * Nav Bar
 */
class Navigation extends React.Component {
  render() {
    return (
       <Router className="navigationBar" >
        <ul className="nav">
          <div className="leftSideButtons">
            <li className="homeNavButton">
              <Link to="/" onClick={() => setPageExtension("/")}> Lens </Link>
            </li>          
          </div>
          <div className="rightSideButtons">
            <li className="streamNavButton"> 
              <Link to="/stream" onClick={() => setPageExtension("/stream")}> Stream </Link>
            </li>
            <li className="settingsNavButton">
              <Link to="/settings" onClick={() => setPageExtension("/settings")}> Settings </Link>
            </li>
            <li className="loginNavButton">
              <Link to="/login" onClick={() => setPageExtension("/login")}> Login </Link>
            </li>
            <li className="signUpNavButton">
              <Link to="/signup" onClick={() => setPageExtension("/signup")}> Sign Up </Link>
            </li>
          </div>
        </ul>
      </Router>
    );
  }
}

class MStream extends React.Component {
  render() {
    return (
      <h1> MStream </h1>
    );
  }
}

class Settings extends React.Component {
  render() {
    return (
      <h1> Settings </h1>
    );
  }
}

class Login extends React.Component {
  render() {
    return (
      <h1> Login </h1>
    );
  }
}

class SignUp extends React.Component {
  render() {
    return (
      <h1> Sign Up </h1>
    );
  }
} 

/**
 * Product Slogan
 */
class Slogan extends React.Component {
  render() {
    return (
        <div className="slogan">
          <h7> The world, the way you want to see it. </h7>
        </div>
    );
  }
}

/*class LoginForm extends React.Component {
  render() {
    return (
      <Form horizontal className="loginForm">
        <FormGroup controlId="formHorizontalEmail">
          <Col >
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col >
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={7}>
            <Button type="submit">
              Login
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}*/

/**
 * All information in the about section
 */
class AboutInformation extends React.Component {
  render() {
    return (
      <div className="aboutInformation">
        <ProductDescription />
        <PlatformIntegrationInformation />
      </div>
    );
  }
}

/**
 * All platform informations
 */
class PlatformIntegrationInformation extends React.Component {
  render() {
    return (
      <ul className="platformIntegrationInformation">
        <li className="facebookInfo">
          <img src="images/supported_media/facebookLogo.png" />
        </li>
        <li className="instagramInfo">
          <img src="images/supported_media/instagramLogo.png" />
        </li>
        <li className="twitterInfo">
          <img src="images/supported_media/twitterLogo.png" />
        </li>
      </ul>
    );
  }
}

/**
 * Description of the product
 */
class ProductDescription extends React.Component {
  render() {
    return (
      <div className="productDescription">
        <h7> An integrated media viewer, showing you exactly what you want to see. </h7>
      </div>
    );
  }
}

/**
 * Home panel containing all UI elements
 */
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    console.log(this.state);
    if (this.state === "/stream") {
      return (
        <div className="homeParent">
          <BackgroundImage />
          <Navigation />
          <MStream />
          <AboutInformation />
        </div>
      );
    } else {
      return (
        <div className="homeParent">
          <BackgroundImage />
          <Navigation />
          <Slogan />
          <AboutInformation />
        </div>
      );
    }
  }
}

// JS Functions
function setPageExtension(pageExtension) {
 ReactDOM.render(React.createElement(Home, pageExtension), document.getElementById("root"));
}

////////

ReactDOM.render(
  React.createElement(Home, "/stream"),
  document.getElementById("root")
);
