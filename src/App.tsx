import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from 'components/Dashboard';
import HomePage from 'pages/Home';
import AboutPage from 'pages/About';
import TickerPage from 'pages/Ticker';

const App: React.FC = () => {
  return (
    <Dashboard>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/:ticker" element={<TickerPage />} />
      </Routes>
    </Dashboard>
  );
}

export default App;
