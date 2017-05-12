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
import FacebookLogin from "react-facebook-login";

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
  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '280945375708713',
        cookie     : true,  // enable cookies to allow the server to access
                          // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.1' // use version 2.1
      });
      
      // FB.getLoginStatus(function(response) {
      //   this.statusChangeCallback(response);
      // }.bind(this));
    }.bind(this);

  // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  };

  render() {
    return (
      <div className="allLogin">
        <Button className="facebookLoginButton" bsStyle="primary" onClick={() => loginLogoutClick()}> 
          Login with Facebook
        </Button>
      </div>
    );
  }
}

/**
 * Product Slogan
 */
class Slogan extends React.Component {
  render() {
    return (
        <h7 className="slogan"> The world, the way you want to see it. </h7>
    );
  }
}

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

  componentWillReceiveProps(nextProps) {
    this.state = nextProps;
  }

  render() {
    let extension = this.state["pageExtension"];
    if (extension === "/stream") {
      return (
        <div className="uiContainer">
          <BackgroundImage />
          <Navigation />
          <MStream />
          <AboutInformation />
        </div>
      );
    } else if (extension === "/settings") {
      return (
        <div className="uiContainer">
          <BackgroundImage />
          <Navigation />
          <Settings />
          <AboutInformation />
        </div>
      );
    } else {
      return (
        <div className="uiContainer">
          <BackgroundImage />
          <Navigation />
          <Slogan />
          <Login />
          <AboutInformation />
        </div>
      );
    }
  }
}

// JS Functions

/**
 * Sets the page extension to load the proper components
 */
function setPageExtension(pageExtension) {
  var props = new Object();
  props["pageExtension"] = pageExtension;

  ReactDOM.render(React.createElement(Home, props), document.getElementById("root"));
}

const responseFacebook = (response) => {
  console.log(response);
}

/**
 * Triggered when the user clicks to login or log out with facebook
 */
function loginLogoutClick() {
   console.log("log in log out click");
}

////////

function loadPage() {
  ReactDOM.render(<Home />, document.getElementById("root"));
}

var opening = true;

if (opening) {
  loadPage();
  opening = false;
  console.log("opening page");  
}

FacebookLogin.getLoginStatus(function(response) {
    responseFacebook(response);
});