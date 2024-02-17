import './App.css';
import SingleFileUploader from './singleFileUploader.js';
import React from 'react';
import LandingPage from "./LandingPage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{background: "linear-gradient(var(--accentcolor-blue100), var(--accentcolor-blue90))"}}>
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/fileUpload" element={<SingleFileUploader />} />
          </Routes>
            {/*
            <Route path="/results">
              <Results />
            </Route>
  */}
        </Router>
      </header>
    </div>
  );
}

export default App;
