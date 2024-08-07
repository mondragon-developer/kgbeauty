import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => (
  <Router basename="/kgbeauty">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
