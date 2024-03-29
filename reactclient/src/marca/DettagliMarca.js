import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { useEffect, useState } from 'react';
import UrlBase from '../UrlBase';

export default function DettagliMarca() {

    const initialData = Object.freeze({
        nome: ''
    });

    const [marca, setMarca] = useState(initialData)
    useEffect(() => {
        const dettagliMarcaModal = document.getElementById('dettagliMarcaModal')
        dettagliMarcaModal.addEventListener('show.bs.modal', event => {
            const button = event.relatedTarget
            const id = button.getAttribute('data-bs-whatever')
            const url = `${UrlBase.API_MARCA}/${id}`;
            fetch(url, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(result => {
                    setMarca(result);
                })
                .catch((error) => {
                    console.log(error);
                    alert(error);
                });

        }, []);
    });

    return (
        <div class="modal fade" id="dettagliMarcaModal" tabIndex="-1" role="dialog" aria-labelledby="dettagliMarcaModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div class="modal-dialog" role="document">

                <div class="modal-content">

                    <div class="modal-header">

                        <h5 class="modal-title" id="dettagliMarcaModalLabel">Dettagli</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div class="modal-body w-100 px-3">

                        <div class="row my-4">
                            <div class="h5 col-sm-2">Nome</div>
                            <div class="col-sm-10">{marca.nome}</div>
                        </div>

                    </div>

                    <div class="modal-footer">

                        <div class="position-absolute start-0">
                            <button type="button" class="close btn btn-secondary mx-2" data-bs-toggle="modal" data-bs-target="#modificaMarcaModal" data-bs-whatever={marca.id}>Modifica</button>
                            <button type="button" class="close btn btn-dark" data-bs-toggle="modal" data-bs-target="#eliminaMarcaModal" data-bs-whatever={marca.id}>Elimina</button>
                        </div>

                        <div class="position-relative end-0">
                            <button type="button" class="close btn btn-light" data-bs-dismiss="modal" aria-label="Close">Chiudi</button>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    );

};
