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

/**
 * Class handling user login and log out statuses
 */
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.loginText = "Login with Facebook";
  }

  /**
   * Logs the user in or out depending on the current connection status
   */
  initiateLoginOrLogout(response) {
    const connectionStatus = response.status;
    if (connectionStatus != "connected" && this.loginText === "Login with Facebook") {
      this.loginText = "Sign Out";
      window.FB.login();
      // loadStream(response)
    } else if (connectionStatus === "connected" && this.loginText === "Sign Out") {
      this.loginText = "Login with Facebook";
      window.FB.logout();
    } else if (connectionStatus === "connected") {
      this.loginText = "Sign Out";
    }
    ReactDOM.render(<Home />, document.getElementById("root"));
  };

  /**
   * Called when the user clicks the login / sign out button
   */
  loginLogoutClick() {
    this.checkLoginState();
  };

  /**
   * Gets the user's current login status from Facebook and passes it
   * to the login / logout handling function
   */
  checkLoginState() {
    window.FB.getLoginStatus(function(response) {
      this.initiateLoginOrLogout(response);
    }.bind(this));
  };

  /**
   * Called when the component mounts in the UI
   */
  componentDidMount() {
    // if this is the first time the home screen is loading
    // we must initialize Facebook
    if (!window.FB) {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId      : '280945375708713',
          cookie     : true,  // enable cookies to allow the server to access
                            // the session
          xfbml      : true,  // parse social plugins on this page
          version    : 'v2.1' // use version 2.1
        });
        
        window.FB.getLoginStatus(function(response) {
          // upon opening the ma
          if (response.status === "connected") {
            loadStream(response);
          }
        }.bind(this));
      }.bind(this);
    } else  {
       window.FB.getLoginStatus(function(response) {
          console.log("getting status");
          this.initiateLoginOrLogout(response);
        }.bind(this));
    }

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
        <Button ref="facebookLoginButton" className="facebookLoginButton" bsStyle="primary" onClick={() => this.loginLogoutClick()}> 
            {this.loginText}
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

  /**
   * This is called before any other UI components. 
   * Check the users connection status here before loading anything else.
   * If the user is already logged in, proceed directly to the stream.
   */
  render() {
    return getMainUI(this.state.pageExtension);
  }
}

// JS Functions

/**
 * Sets the page extension to load the proper components
 */
function setPageExtension(pageExtension) {
  var props = new Object();
  props["pageExtension"] = pageExtension;

  // if the user is coming from another page of the website
  props["loadType"] = "nonDefaultLoad"

  ReactDOM.render(React.createElement(Home, props), document.getElementById("root"));
}

/**
 * Renders the stream UI components and gets the data
 */
function loadStream(response) {
  setPageExtension("/stream");
}

/**
 * Renders the UI components
 */
function loadLogin() {
  console.log("User is now logged out.");
}

/**
 * This function loads the initial page when the user first arrives at the website
 */
function loadInitialPage() {
  var props = new Object();

  // when the user first opens the website
  props["loadType"] = "defaultLoad";
  props["pageExtension"] = "/";

  ReactDOM.render(React.createElement(Home, props), document.getElementById("root"));
}

/**
 * Returns the main user interface components for the current state of the application
 */
function getMainUI(extension) {
  if (extension === "/stream") {
      return (
        <div className="uiContainer">
          <BackgroundImage />
          <Navigation />
          <MStream />
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

////////

/**
 * To detect if this is the first time the user opened the page
 */
var opening = true;

if (opening) {
  loadInitialPage();
  opening = false;
};