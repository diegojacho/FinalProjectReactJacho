import React from 'react';
import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Apparel } from './pages/Apparel';
import { Catalog } from './pages/Catalog';
import { ItemDescription } from "./pages/ItemDescription";
import { Categories } from './pages/Categories';
import "./App.css";


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/catalog" element={<Catalog/>}/>
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/apparel" element={<Apparel/>}/>
      <Route path="/catalog/:IDE" element={<ItemDescription/>}/>
      <Route path="*" element={404}/>
    </Routes>
    </>
    );
}

export default App;


//Vinyl shop records is a website where you can find vinyl records
//turntable, and promotional clothes, right now I onlyhave vynil records but
//I gave them different categories to them
//add to cart ad cart widget is not responsive/working at the moment
//ItemCount can iterate and increase number of items but an error will appear when you try to add to cart
//I will have the cart ready for final