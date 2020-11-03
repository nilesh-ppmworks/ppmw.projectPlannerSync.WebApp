import React, { Component } from "react";
//import MicrosoftLogin from "react-microsoft-login";
//import { AuthError, AuthResponse } from 'msal';
//import { RouteComponentProps, Redirect } from 'react-router-dom';
import * as Msal from "msal";
import { Button, PrimaryButton } from "office-ui-fabric-react";
//import { AppState } from "./appState";
import axios from "axios";
//const baseApiUrl = AppState.globals.apiBaseUrl;
//const apiUrl = baseApiUrl + "users";
//const mdt_logo = require("./components/assets/mdt_logo.png");

const config = {
  auth: {
    clientId: "c8ed58ff-38bd-4e2b-9895-a13a3326bc98",
    //authority: "https://login.microsoftonline.com/" + AppState.globals.tenantID
  },
  storeAuthStateInCookie: true,
  cacheLocation: "localStorage"
};

var userAgentApplication = new Msal.UserAgentApplication(config);

export class Login extends Component {
  //userAgentApplication: any = undefined;

  // The login button click handler

 

  handleLoginClick = (event: any): void => {
    if (!userAgentApplication) {
      userAgentApplication = new Msal.UserAgentApplication(config);
    }
    //userAgentApplication.handleRedirectCallback(authHandler);
//AppState.globals.userAgentApplication = userAgentApplication;

    const loginRequest = {
      scopes: [
        "https://graph.microsoft.com/user.read",
        "https://graph.microsoft.com/user.readbasic.all"
      ],
      //authority: "https://login.microsoftonline.com/" + AppState.globals.tenantID
    };

    // userAgentApplication.loginRedirect(loginRequest);   
 
    userAgentApplication.loginPopup(loginRequest).then(
      function(id_token) {
        var user = userAgentApplication.getAccount();
        debugger;
        if (user) {
          
          /*
          localStorage.setItem("role", "user");
          console.log("signed in sucessfully");
          localStorage.setItem("id_token", id_token.idToken.rawIdToken);
          // AppState.globals.id_token = id_token.idToken.rawIdToken;
          localStorage.setItem("user", id_token.idToken.name);
          // AppState.globals.user = id_token.idToken.name;
          localStorage.setItem("userUniqueId", id_token.uniqueId);
          //AppState.globals.userUniqueId = id_token.uniqueId
          */
          // get an access token
          userAgentApplication.acquireTokenSilent(loginRequest).then(
            function(access_token) {
              console.log("Success acquiring access token");
              localStorage.setItem("access_token", access_token.accessToken);
              // AppState.globals.access_token = access_token.accessToken;
              debugger;
              },
            function(error) { 
              debugger;             
              
              // interaction required
              if (error && error.indexOf("interaction_required") != -1) {
                userAgentApplication.acquireTokenPopup(loginRequest).then(
                  function(access_token) {
                    debugger;
                    console.log("Success acquiring access token");
                    localStorage.setItem(
                      "access_token",
                      access_token.accessToken
                    );
                    //AppState.globals.access_token = access_token.accessToken;
                   // window.location.href = "/#/forecastbyproject";
                  },
                  function(error) {
                    debugger;
                    console.log("Failure acquiring token: " + error);
                    //document.getElementById("sign_in_text").innerText = error;
                  }
                );
              }
            }
          );

         // window.location.href = "/#/forecastbyproject";
        } else {
          console.log("signed in failure");
        }
      },
      function(error) {
        debugger;
        console.log("error: " + error);
        //document.getElementById("sign_in_text").innerText = error;
      }
    );
  };

  // In React render()
  public render() {
    return (
      <div
        style={{
          position: "fixed",
          fontFamily: "Segoe UI",
          textAlign: "center",
          top: "25%",
          left: "35%",
          background: "rgb(6,76,142)",
          borderRadius: "2px",
          height: "265px",
          width: "300px",
          border: "solid slategray 1px",
          padding: "30px"
        }}
      >
        <div>
          <img
            //src={String(mdt_logo)}
            style={{ height: "55px", marginBottom: "30px" }}
          ></img>
        </div>
        <div>
          <span style={{ color: "white", fontSize: "28px" }}>
            New Product Sales Forecasting
          </span>
        </div>
        <div>
          <PrimaryButton
            style={{ marginTop: "55px" }}
            type="button"
            onClick={e => this.handleLoginClick(e)}
          >
            Login with Microsoft
          </PrimaryButton>
        </div>
      </div>
    );
  }
}
