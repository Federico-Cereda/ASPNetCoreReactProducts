import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';

export default function Home() {
    return (
        <div className="container">
            <div className="row min-vh-100">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <h1 className='mb-5'>Benvenuti nella home</h1>
                    <p>Descrizione</p>
                </div>
            </div>
        </div>
    );
};
