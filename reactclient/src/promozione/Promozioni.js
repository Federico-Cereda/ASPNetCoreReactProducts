import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import TabellaPromozioni from './TabellaPromozioni';
import CreaPromozione from './CreaPromozione';
import DettagliPromozione from './DettagliPromozione';
import ModificaPromozione from './ModificaPromozione';
import EliminaPromozione from './EliminaPromozione';

export default function Promozioni() {

    return (
        <div className="container">
            <div className="row min-vh-100">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <TabellaPromozioni />
                    <CreaPromozione />
                    <DettagliPromozione />
                    <ModificaPromozione />
                    <EliminaPromozione />
                </div>
            </div>
        </div>
    );

};
