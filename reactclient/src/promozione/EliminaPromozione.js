import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { useEffect, useState } from 'react';
import UrlBase from '../UrlBase';

export default function EliminaPromozione() {

    const initialData = Object.freeze({
        nome: '',
        valore: '',
        dataFine: ''
    });

    const [promozione, setPromozione] = useState(initialData)
    useEffect(() => {
        const eliminaPromozioneModal = document.getElementById('eliminaPromozioneModal')
        eliminaPromozioneModal.addEventListener('show.bs.modal', event => {
            const button = event.relatedTarget
            const id = button.getAttribute('data-bs-whatever')
            const url = `${UrlBase.API_PROMOZIONE}/${id}`;
            fetch(url, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(result => {
                    setPromozione(result);
                })
                .catch((error) => {
                    console.log(error);
                    alert(error);
                });

        }, []);
    });

    const submit = (e) => {
        e.preventDefault();

        const url = `${UrlBase.API_PROMOZIONE}?id=${promozione.id}`;
        fetch(url, {
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
        <div class="modal fade" id="eliminaPromozioneModal" tabIndex="-1" role="dialog" aria-labelledby="eliminaPromozioneModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div class="modal-dialog" role="document">

                <div class="modal-content">

                    <div class="modal-header">

                        <h5 class="modal-title" id="eliminaPromozioneModalLabel">Conferma Eliminazione</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div class="modal-body w-100 px-3">

                        <div class="col-sm-10 my-1">Sei sicuro di voler eliminare la promozione "{promozione.nome}" ?</div>

                    </div>

                    <div class="modal-footer">

                        <div class="position-absolute start-0">
                            <button type="button" class="close btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#dettagliPromozioneModal" data-bs-whatever={promozione.id}>Dettagli</button>
                            <button type="button" class="close btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modificaPromozioneModal" data-bs-whatever={promozione.id}>Modifica</button>
                        </div>

                        <div class="position-relative end-0">
                            <button type="button" class="close btn btn-light" data-bs-dismiss="modal" aria-label="Close">Annulla</button>
                            <button type="button" onClick={submit} class="close btn btn-dark ms-2" data-bs-dismiss="modal" aria-label="Close">Elimina</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );

};
