import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Valores from './components/Valores';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/valores" element={<Valores />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
