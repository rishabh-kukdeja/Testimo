// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import LandingPage from './pages/landing_page';
import Features from './pages/features'; 
import Integrations from './pages/integration';
import Pricing from './pages/pricing';

function App() {
  return (
    <Router>
      <div className="App bg-gray-900 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/integration" element={<Integrations />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
