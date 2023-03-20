import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { useState } from 'react';

export default function FormPostProdotto(props) {

    const [formData, setFormData] = useState([]);

    const change = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const submit = (e) => {
        e.preventDefault();

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

            <div class="form-group row" className='mt-5'>
                <label class="col-sm-2 col-form-label" className='h3 form-label'>Nome</label>
                <div class="col-sm-10">
                    <input class="form-control" value={formData.nome} name="nome" type="text" className='form-control' onChange={change} />
                </div>
            </div>

            <div class="form-group row" className='mt-5'>
                <label class="col-sm-2 col-form-label" className='h3 form-label'>Prezzo</label>
                <div class="col-sm-10">
                    <input class="form-control" value={formData.prezzo} name="prezzo" type="currency" className='form-control' onChange={change} />
                </div>
            </div>

            <div class="form-group row" className='mt-5'>
                <label class="col-sm-2 col-form-label" className='h3 form-label'>Peso</label>
                <div class="col-sm-10">
                    <input class="form-control" value={formData.peso} name="peso" type="number" className='form-control' onChange={change} />
                </div>
            </div>

            <div class="form-group row" className='mt-5'>
                <label class="col-sm-2 col-form-label" className='h3 form-label'>Marca</label>
                <div class="col-sm-10">
                    <input class="form-control" value={formData.idMarca} name="idMarca" type="number" className='form-control' onChange={change} />
                </div>
            </div>
            <div class="col-sm-10">
                <button class="form-group row" onClick={submit} className="btn btn-dark btn-lg w-100 mt-5">Aggiungere</button>
            </div>
        </form>
    )

}
