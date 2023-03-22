import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Prodotti from './prodotto/Prodotti';
import Marche from './Marche';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Prodotti" element={<Prodotti />}></Route>
          <Route path="/Marche" element={<Marche />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
