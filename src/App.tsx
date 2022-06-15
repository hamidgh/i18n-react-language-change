import React from 'react';
import './app.scss';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
