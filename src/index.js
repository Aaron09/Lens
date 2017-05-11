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

/**
 * Background Image
 */
class BackgroundImage extends React.Component {
  render() {
    return (
      <img src="indexBackgroundChicago.jpeg" className="backgroundImage" />
    );
  }
}

/**
 * Nav Bar
 */
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
            <li className="streamNavButton"> 
              <a href="/stream"> Stream </a>
            </li>
            <li className="settingsNavButton">
              <a href="/settings"> Settings </a>
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
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/2000px-F_icon.svg.png" />
        </li>
        <li className="twitterInfo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Twitter_Logo_White_On_Blue_Circular.svg/2000px-Twitter_Logo_White_On_Blue_Circular.svg.png" />
        </li>
        <li className="instagramInfo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2000px-Instagram_logo_2016.svg.png" />
        </li>
      </ul>
    );
  }
}

class ProductDescription extends React.Component {
  render() {
    return (
      <div className="productDescription">
        <h7> An integrated content viewer, showing you exactly what you want to see. </h7>
      </div>
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
        <AboutInformation />
      </div>
    );
  }
}

////////

ReactDOM.render(
  <Home />,
  document.getElementById("root")
);

