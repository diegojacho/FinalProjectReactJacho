import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Apparel from './pages/Apparel';
import Catalog from './pages/Catalog';
import Deals from './pages/Deals';
import Picks from './pages/Picks';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/catalog" element={<Catalog/>}/>
      <Route path="/apparel" element={<Apparel/>}/>
      <Route path="/deals" element={<Deals/>}/>
      <Route path="/picks" element={<Picks/>}/>
    </Routes>
    </>
    );
}

export default App;
