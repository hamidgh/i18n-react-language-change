import React, {useEffect} from 'react';
import './app.scss';
import HomePage from './home/HomePage';
import {Routes, Route} from "react-router-dom";
import {useTranslation} from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('en');
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
