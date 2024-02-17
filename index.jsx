import React from "react";
import ReactDOM from "react-dom";
import { ContinueAsGuest } from "./ContinueAsGuest";
import { SignInButton } from "./SignInButton";
import "./style.css";

ReactDOM.render(<App />, document.getElementById("root"));
const App = () => {
    return (
        <div className="background">
        <div className="div-2">
          <div className="overlap-group">
            <img className="dots" alt="Dots" src="dots.png" />
            <div className="description">actively recall your lectures</div>
            <div className="title">Recollect</div>
          </div>
          <div className="SIGN-IN">
            <div className="frame">
              <SignInButton className="design-component-instance-node" />
            </div>
          </div>
          <div className="CONTINUE-AS-GUEST">
            <div className="continue-as-guest-wrapper">
              <ContinueAsGuest className="design-component-instance-node" />
            </div>
          </div>
        </div>
      </div>
    );
  };