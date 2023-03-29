import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { useEffect, useState } from 'react';

export default function CreaProdotto() {

    const initialFormData = Object.freeze({
        nome: '',
        prezzo: '',
        peso: '',
        idMarca: '',
    });

    const [formData, setFormData] = useState(initialFormData);

    const close = (e) => {
        setFormData({
            ...initialFormData,
            [e.target.name]: null,
        });
    };

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
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

    };

    const [marche, setMarche] = useState([]);
    useEffect(() => {
        fetch('https://localhost:7273/api/Marca', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(result => {
                setMarche(result);
            })
    }, [])

    return (
        <div class="modal fade" id="creaProdottoModal" tabIndex="-1" role="dialog" aria-labelledby="creaProdottoModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div class="modal-dialog" role="document">

                <div class="modal-content">

                    <div class="modal-header">

                        <h5 class="modal-title" id="creaProdottoModalLabel">Nuovo prodotto</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={close}></button>

                    </div>

                    <div class="modal-body">
                        <form class="w-100 px-3">

                            <div class="form-group row mt-4">
                                <label class="h3 col-sm-2 col-form-label">Nome</label>
                                <div class="col-sm-10">
                                    <input class="form-control" value={formData.nome} name="nome" type="text" onChange={change} />
                                </div>
                            </div>

                            <div class="form-group row mt-4">
                                <label class="h3 col-sm-2 col-form-label">Prezzo</label>
                                <div class="col-sm-10">
                                    <input class="form-control" value={formData.prezzo} name="prezzo" type="currency" onChange={change} />
                                </div>
                            </div>

                            <div class="form-group row mt-4">
                                <label class="h3 col-sm-2 col-form-label">Peso</label>
                                <div class="col-sm-10">
                                    <input class="form-control" value={formData.peso} name="peso" type="number" onChange={change} />
                                </div>
                            </div>

                            <div class="form-group row my-4">
                                <label class="h3 col-sm-2 col-form-label">Marca</label>
                                <div class="col-sm-10">
                                    <select class="form-select" value={formData.idMarca} name="idMarca" onChange={change}>
                                        <option class="selected"></option>
                                        {marche.map((marca) => (
                                            <option key={marca.id} value={marca.id}>
                                                {marca.nome}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                        </form>
                    </div>

                    <div class="modal-footer">

                        <button type="button" class="close btn btn-light" data-bs-dismiss="modal" aria-label="Close">Annulla</button>
                        <button type="button" onClick={submit} class="close btn btn-success ms-2" data-bs-dismiss="modal" aria-label="Close">Aggiungi</button>

                    </div>

                </div>
            </div>
        </div>
    )

}
