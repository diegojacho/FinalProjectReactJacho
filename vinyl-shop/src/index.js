import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CartShopProvider } from './contexts/CartShopContext';
import { ToastContainer } from 'react-toastify';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCG_XTrnguFIi50JWm5AxhrSZIsQeIvfU0",
  authDomain: "coderhouse-react-4a2c3.firebaseapp.com",
  projectId: "coderhouse-react-4a2c3",
  storageBucket: "coderhouse-react-4a2c3.appspot.com",
  messagingSenderId: "526260244128",
  appId: "1:526260244128:web:5dd4b2f0398526982943c5"
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartShopProvider>
    <BrowserRouter>
      <App />
      <ToastContainer limit={2}/>
    </BrowserRouter>
    </CartShopProvider>
  </React.StrictMode>
);
