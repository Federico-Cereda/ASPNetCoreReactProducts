import React from 'react';
import Prodotti from './Prodotti';
import Header from './Header';
import Footer from './Footer';

export default function App() {
  return (
    <div>
      <Header />
      <div className="conteiner">
        <div className="row min-vh-100">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h1>Hello!</h1>
            <Prodotti />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
