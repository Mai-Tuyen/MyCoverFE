import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const CLIENT_ID =
  "238410066075-hbl77barlj265jh3gvfijgnkfpqhhon0.apps.googleusercontent.com";

class GoogleBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogined: false,
      accessToken: "",
    };
  }
  login = (response) => {
      debugger
    if (response.accessToken) {
      this.setState((state) => ({
        isLogined: true,
        accessToken: response.accessToken,
      }));
    }
  };

  logout = (response) => {
    this.setState((state) => ({
      isLogined: false,
      accessToken: "",
    }));
  };

  handleLoginFailure = (response) => {
      debugger;
    alert("Failed to log in");
  };

  handleLogoutFailure = (response) => {
    alert("Failed to log out");
  };
  render() {
    return (
      <div>
        {this.state.isLogined ? (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure}
          ></GoogleLogout>
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Login with google"
            onSuccess={this.login}
            onFailure={this.handleLoginFailure}
            cookiePolicy={"single_host_origin"}
            responseType="code,token"
          />
        )}
        {this.state.accessToken ? (
          <h5>
            Your Access Token: <br />
            <br /> {this.state.accessToken}
          </h5>
        ) : null}
      </div>
    );
  }
}

export default GoogleBtn;
