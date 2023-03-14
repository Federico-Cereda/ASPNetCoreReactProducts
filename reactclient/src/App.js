import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Prodotti from './prodotti';
import Marche from './marche';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/prodotti" element={<Prodotti />}></Route>
          <Route path="/marche" element={<Marche />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
