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
                <Link to="/fileUpload">
                  <button className="button">Continue as Guest</button>
                </Link>
            </div>
          </div>
          
          <div className="display-data">
            <div className="frame">
                <Link to="/results">
                <button className="button">Display Data</button>
              </Link>
            </div>
          </div>

            {/* File Upload */}
          <form action="/action_page.php">
              <input type="text" id="myFile" name="filename"></input>
          </form>

        </div>
    )
}

export default LandingPage;