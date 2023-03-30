import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import TabellaMarche from './TabellaMarche';
import CreaMarca from './CreaMarca';
import DettagliMarca from './DettagliMarca';
import ModificaMarca from './ModificaMarca';
import EliminaMarca from './EliminaMarca';

export default function Marche() {

    return (
        <div className="container">
            <div className="row min-vh-100">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <TabellaMarche />
                    <CreaMarca />
                    <DettagliMarca />
                    <ModificaMarca />
                    <EliminaMarca />
                </div>
            </div>
        </div>
    );

};
