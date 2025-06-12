// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/header';
import LandingPage from './pages/landing_page';

function App() {
  return (
    <div className="App bg-gray-900 min-h-screen">
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;