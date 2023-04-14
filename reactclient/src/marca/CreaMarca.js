import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { useState } from 'react';

export default function CreaMarca() {

    const initialFormData = Object.freeze({
        nome: ''
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

        const marca = {
            id: 0,
            nome: formData.nome
        };

        fetch('http://carrellospesaapi/api/Marca', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(marca)
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
        <div class="modal fade" id="creaMarcaModal" tabIndex="-1" role="dialog" aria-labelledby="creaMarcaModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">

                <div class="modal-content">

                    <div class="modal-header">

                        <h5 class="modal-title" id="creaMarcaModalLabel">Nuova marca</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={close}></button>

                    </div>

                    <div class="modal-body">
                        <form class="w-100 px-3">

                            <div class="form-group row my-4">
                                <label class="h3 col-sm-2 col-form-label">Nome</label>
                                <div class="col-sm-7">
                                    <input class="form-control" value={formData.nome} name="nome" type="text" onChange={change} />
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
