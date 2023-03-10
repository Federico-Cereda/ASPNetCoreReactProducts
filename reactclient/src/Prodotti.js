import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProdotti from './AppProdotti';

const root = ReactDOM.createRoot(document.getElementById('rootProdotti'));
root.render(<AppProdotti />);
