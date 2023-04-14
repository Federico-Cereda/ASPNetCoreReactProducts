import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { useEffect, useState } from 'react';

export default function EliminaMarca() {

    const initialData = Object.freeze({
        nome: ''
    });

    const [marca, setMarca] = useState(initialData)
    useEffect(() => {
        const eliminaMarcaModal = document.getElementById('eliminaMarcaModal')
        eliminaMarcaModal.addEventListener('show.bs.modal', event => {
            const button = event.relatedTarget
            const id = button.getAttribute('data-bs-whatever')
            fetch('http://carrellospesaapi/api/Marca/' + id, {
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
    })

    const submit = (e) => {
        e.preventDefault();

        fetch('http://carrellospesaapi/api/Marca?id=' + marca.id, {
            method: 'DELETE'
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
        <div class="modal fade" id="eliminaMarcaModal" tabIndex="-1" role="dialog" aria-labelledby="eliminaMarcaModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div class="modal-dialog" role="document">

                <div class="modal-content">

                    <div class="modal-header">

                        <h5 class="modal-title" id="eliminaMarcaModalLabel">Conferma Eliminazione</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div class="modal-body w-100 px-3">

                        <div class="col-sm-10 my-1">Sei sicuro di voler eliminare la marca "{marca.nome}" ?</div>

                    </div>

                    <div class="modal-footer">

                        <div class="position-absolute start-0">
                            <button type="button" class="close btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#dettagliMarcaModal" data-bs-whatever={marca.id}>Dettagli</button>
                            <button type="button" class="close btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modificaMarcaModal" data-bs-whatever={marca.id}>Modifica</button>
                        </div>

                        <div class="position-relative end-0">
                            <button type="button" class="close btn btn-light" data-bs-dismiss="modal" aria-label="Close">Annulla</button>
                            <button type="button" onClick={submit} class="close btn btn-dark ms-2" data-bs-dismiss="modal" aria-label="Close">Elimina</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )

}
