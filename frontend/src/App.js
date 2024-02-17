import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="top-text">
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
          </div>
          <div className="antic-didone-bolded">Recollect</div>
          <div className="antic-didone-regular">actively recall your lectures</div>
        <div className="buttons">
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
