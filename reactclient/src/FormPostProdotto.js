import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';

export default function FormPostProdotto(props) {

    const Submit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        const prodotto = {
            id: 0,
            nome: formData.nome,
            prezzo: formData.prezzo,
            peso: formData.peso,
            idMarca: formData.idMarca
        };

        fetch('https://localhost:7273/api/Prodotto', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(prodotto)
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
            });
    };

    return (
        <form className='w-100 px-5'>
            <h1 className='mt-5'>Nuovo prodotto</h1>

            <div className='mt-5'>
                <label className='h3 form-label'>Nome prodotto</label>
                <input value={formData.nome} name="nome" type="text" className='form-control' />
            </div>

            <div className='mt-5'>
                <label className='h3 form-label'>Prezzo prodotto</label>
                <input value={formData.prezzo} name="prezzo" type="currency" className='form-control' />
            </div>

            <div className='mt-5'>
                <label className='h3 form-label'>Peso prodotto</label>
                <input value={formData.peso} name="peso" type="number" className='form-control' />
            </div>

            <div className='mt-5'>
                <label className='h3 form-label'>Marca prodotto</label>
                <input value={formData.idMarca} name="idMarca" type="number" className='form-control' />
            </div>

            <button onClick={Submit} className="btn btn-dark btn-lg w-100 mt-5">Aggiungere</button>
        </form>
    )

}
