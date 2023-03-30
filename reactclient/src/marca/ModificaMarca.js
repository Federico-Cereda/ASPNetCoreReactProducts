import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { useEffect, useState } from 'react';

export default function ModificaMarca() {

    const initialFormData = Object.freeze({
        nome: ''
    });

    const [formData, setFormData] = useState(initialFormData);
    useEffect(() => {
        const dettagliMarcaModal = document.getElementById('modificaMarcaModal')
        dettagliMarcaModal.addEventListener('show.bs.modal', event => {
            const button = event.relatedTarget
            const id = button.getAttribute('data-bs-whatever')
            fetch('https://localhost:7273/api/Marca/' + id, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(result => {
                    setFormData(result);
                })
                .catch((error) => {
                    console.log(error);
                    alert(error);
                });

        }, []);
    })

    const change = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const submit = (e) => {
        e.preventDefault();

        const marca = {
            id: formData.id,
            nome: formData.nome
        };

        fetch('https://localhost:7273/api/Marca', {
            method: 'PUT',
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
        <div class="modal fade" id="modificaMarcaModal" tabIndex="-1" role="dialog" aria-labelledby="modificaMarcaModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div class="modal-dialog" role="document">

                <div class="modal-content">

                    <div class="modal-header">

                        <h5 class="modal-title" id="modificaMarcaModalLabel">Modifica</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div class="modal-body">
                        <form class="w-100 px-3">

                            <div class="form-group row mt-4">
                                <label class="h3 col-sm-2 col-form-label">Nome</label>
                                <div class="col-sm-10">
                                    <input class="form-control" value={formData.nome} name="nome" type="text" onChange={change} />
                                </div>
                            </div>

                        </form>
                    </div>

                    <div class="modal-footer">

                        <div class="position-absolute start-0">
                            <button type="button" class="close btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#dettagliMarcaModal" data-bs-whatever={formData.id}>Dettagli</button>
                            <button type="button" class="close btn btn-dark" data-bs-toggle="modal" data-bs-target="#eliminaMarcaModal" data-bs-whatever={formData.id}>Elimina</button>
                        </div>

                        <div class="position-relative end-0">
                            <button type="button" class="close btn btn-light" data-bs-dismiss="modal" aria-label="Close">Annulla</button>
                            <button type="button" onClick={submit} class="close btn btn-secondary ms-2" data-bs-dismiss="modal" aria-label="Close">Modifica</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )










}
