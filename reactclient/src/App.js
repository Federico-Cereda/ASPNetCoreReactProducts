import React from 'react';
import Prodotti from './TabellaProdotti';
import Header from './Header';
import Footer from './Footer';

export default function App() {
  return (
    <div>
      <Header />

      <div className="container">
        <div className="row min-vh-100">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h1 className='mb-5'>Lista Prodotti</h1>
            <button className="btn btn-success btn-sm">Aggiungi nuovo prodotto</button>
            <Prodotti />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
