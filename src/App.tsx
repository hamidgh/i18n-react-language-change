import React from 'react';
import './App.scss';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
