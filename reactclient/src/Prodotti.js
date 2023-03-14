import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import TabellaProdotti from './TabellaProdotti';

// const root = ReactDOM.createRoot(document.getElementById('rootProdotti'));
// root.render(<App />);

const prodotti = () => {
    return (<TabellaProdotti />);
};

export default prodotti;
