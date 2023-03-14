import React from 'react';
import TabellaProdotti from './TabellaProdotti';
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

          {/* <div className="container">
            <div className="row min-vh-100">
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <h1 className='mb-5'>Lista Prodotti</h1>
                <button className="btn btn-success btn-sm">Aggiungi nuovo prodotto</button>
                <TabellaProdotti />
              </div>
            </div>
          </div> */}

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
