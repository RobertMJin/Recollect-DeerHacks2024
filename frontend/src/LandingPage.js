import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function LandingPage() {
    return(
        <div className="background" >
          {/* Dots */}
          <div className="overlap-group">
            <div className="dotrow">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="dotrow">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="dotrow">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

          {/* Title */}
          <div className="antic-didone-bolded">Recollect</div>
          {/* Description */}
          <div className="antic-didone-regular">actively recall your lectures</div>

          {/* Buttons */}
          <div className="sign-in">
            <div className="frame">
              <button className="button">Sign In</button>
            </div>
          </div>
          <div className="continue-as-guest">
            <div className="frame">
              <button className="button">Continue as Guest</button>
              <Link to="/fileUpload"></Link>
            </div>
          </div>

          <form action="/action_page.php">
              <input type="file" id="myFile" name="filename"></input>
              <input type="submit"></input>
          </form>
        </div>
    )
}

export default LandingPage;