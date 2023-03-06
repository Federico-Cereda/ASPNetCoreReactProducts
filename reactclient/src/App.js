import React from 'react';
import Prodotti from './Prodotti';

export default function App() {
  return (
    <div className="container">
      <div className="row min-vh-100">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <h1>Hello!</h1>
          <Prodotti />
        </div>
      </div>
    </div>
  );
}
