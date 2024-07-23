import './App.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PracticeTestMenu from './components/PracticeTestMenu';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/practice" element={<PracticeTestMenu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;