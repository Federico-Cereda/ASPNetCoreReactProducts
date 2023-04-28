import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { useState } from 'react';
import UrlBase from '../UrlBase';

export default function CreaPromozione() {

    const initialFormData = Object.freeze({
        nome: '',
        valore: '',
        dataFine: ''
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

        const promozione = {
            id: 0,
            nome: formData.nome,
            valore: formData.valore,
            dataFine: formData.dataFine
        };

        const url = UrlBase.API_PROMOZIONE;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(promozione)
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

    return (
        <div class="modal fade" id="creaPromozioneModal" tabIndex="-1" role="dialog" aria-labelledby="creaPromozioneModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div class="modal-dialog" role="document">

                <div class="modal-content">

                    <div class="modal-header">

                        <h5 class="modal-title" id="creaPromozioneModalLabel">Nuova promozione</h5>
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
                                <label class="h3 col-sm-2 col-form-label">Valore</label>
                                <div class="col-sm-10">
                                    <input class="form-control" value={formData.valore} name="valore" type="number" onChange={change} />
                                </div>
                            </div>

                            <div class="form-group row my-4">
                                <label class="h3 col-sm-2 col-form-label">Termine</label>
                                <div class="col-sm-10">
                                    <input class="form-control" value={formData.dataFine} name="dataFine" type="datetime" onChange={change} />
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
    );

};
