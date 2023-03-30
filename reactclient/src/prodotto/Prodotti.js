import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import TabellaProdotti from './TabellaProdotti';
import CreaProdotto from './CreaProdotto';
import DettagliProdotto from './DettagliProdotto';
import ModificaProdotto from './ModificaProdotto';
import EliminaProdotto from './EliminaProdotto';

export default function Prodotti() {

    return (
        <div className="container">
            <div className="row min-vh-100">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <TabellaProdotti />
                    <CreaProdotto />
                    <DettagliProdotto />
                    <ModificaProdotto />
                    <EliminaProdotto />
                </div>
            </div>
        </div>
    );

};
