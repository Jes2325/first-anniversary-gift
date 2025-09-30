// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './components/HomePage';
import SongPage from './components/SongPage';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Always show the header (tabs) */}
        <Header />
        
        {/* Define Routes */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/song/:songId" element={<SongPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
