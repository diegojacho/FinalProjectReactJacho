import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Apparel } from './pages/Apparel';
import { Catalog } from './pages/Catalog';
import { ItemDescription } from "./pages/ItemDescription";
import { Categories } from './pages/Categories';
import { ShopCartCheckout } from './pages/ShopCartCheckout';
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
      <Route path="/checkout" element={<ShopCartCheckout/>}/>
      <Route path="/catalog/:IDE" element={<ItemDescription/>}/>
      <Route path="*" element={404}/>
    </Routes>
    </>
    );
}

export default App;
