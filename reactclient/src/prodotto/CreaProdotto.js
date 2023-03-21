import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { useState } from 'react';

export default function CreaProdotto() {

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
            .then(responseFromServer => {
                console.log(responseFromServer);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

    };

    return (
        <form class="w-100 px-5">

            <div class="form-group row mt-4 text-center">
                <h1>Nuovo prodotto</h1>
            </div>

            <div class="form-group row mt-4">
                <label class="h3 col-sm-2 col-form-label">Nome</label>
                <div class="col-sm-5">
                    <input class="form-control" value={formData.nome} name="nome" type="text" onChange={change} />
                </div>
            </div>

            <div class="form-group row mt-4">
                <label class="h3 col-sm-2 col-form-label">Prezzo</label>
                <div class="col-sm-5">
                    <input class="form-control" value={formData.prezzo} name="prezzo" type="currency" onChange={change} />
                </div>
            </div>

            <div class="form-group row mt-4">
                <label class="h3 col-sm-2 col-form-label">Peso</label>
                <div class="col-sm-5">
                    <input class="form-control" value={formData.peso} name="peso" type="number" onChange={change} />
                </div>
            </div>

            <div class="form-group row mt-4">
                <label class="h3 col-sm-2 col-form-label">Marca</label>
                <div class="col-sm-5">
                    <input class="form-control" value={formData.idMarca} name="idMarca" type="number" onChange={change} />
                </div>
            </div>

            <div class="form-group row  mt-4">
                <div class="col-sm-10">
                    <button type="submit" onClick={submit} class="btn btn-dark">Aggiungere</button>
                </div>
            </div>

        </form>
    )

}
