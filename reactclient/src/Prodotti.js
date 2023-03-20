import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import FormPostProdotto from './FormPostProdotto';
import TabellaProdotti from './TabellaProdotti';

export default function Prodotti() {

    // const [showForm, setShowForm] = useState(false);

    // const showForm = () => {
    //     <FormPostProdotto />
    // }

    return (
        <div className="container">
            <div className="row min-vh-100">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <h1 className='mb-5'>Lista Prodotti</h1>
                    {/* <button onClick={() => setShowForm(true)} className="btn btn-success btn-sm">Aggiungi nuovo prodotto</button> */}
                    <TabellaProdotti />
                </div>
            </div>
        </div>
    );
};
