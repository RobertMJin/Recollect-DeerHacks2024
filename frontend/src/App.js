import './App.css';
import Upload from './Upload.js';
import React from 'react';
import LandingPage from "./LandingPage.js";
import Display from "./display.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MonkeyType from './monkeyType.js';
import TypeTest from './TypeTest.js';

function App() {
  return (
    <div className="App" style={{background: "linear-gradient(var(--accentcolor-blue100), var(--accentcolor-blue90))"}}>
      <header className="App-header">
        <Router>
            <AnimatePresence>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/fileUpload" element={<Upload />} />
                <Route path="/results" element={<TypeTest />} />
              </Routes>
            </AnimatePresence>
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
