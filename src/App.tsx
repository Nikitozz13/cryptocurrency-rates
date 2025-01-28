import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/Home';
import AboutPage from 'pages/About';
import TickerPage from 'pages/Ticker';
import { DashboardTemplate } from 'components/Dashboard';

const App: React.FC = () => {
  return (
    <DashboardTemplate>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/:ticker" element={<TickerPage />} />
      </Routes>
    </DashboardTemplate>
  );
}

export default App;
