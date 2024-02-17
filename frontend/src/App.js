import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App" style={{background: "linear-gradient(var(--accentcolor-blue100), var(--accentcolor-blue90))"}}>
      <header className="App-header">
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
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
