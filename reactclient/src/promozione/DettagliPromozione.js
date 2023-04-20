import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { useEffect, useState } from 'react';
import UrlBase from '../UrlBase';

export default function DettagliPromozione() {

    const initialData = Object.freeze({
        nome: '',
        valore: '',
        dataFine: ''
    });

    const [promozione, setPromozione] = useState(initialData)
    useEffect(() => {
        const dettagliPromozioneModal = document.getElementById('dettagliPromozioneModal')
        dettagliPromozioneModal.addEventListener('show.bs.modal', event => {
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

    return (
        <div class="modal fade" id="dettagliPromozioneModal" tabIndex="-1" role="dialog" aria-labelledby="dettagliPromozioneModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div class="modal-dialog" role="document">

                <div class="modal-content">

                    <div class="modal-header">

                        <h5 class="modal-title" id="dettagliPromozioneModalLabel">Dettagli</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div class="modal-body w-100 px-3">

                        <div class="row mt-4">
                            <div class="h5 col-sm-2">Nome</div>
                            <div class="col-sm-10">{promozione.nome}</div>
                        </div>

                        <div class="row mt-4">
                            <div class="h5 col-sm-2">Valore</div>
                            <div class="col-sm-10">{promozione.valore} %</div>
                        </div>

                        <div class="row mt-4">
                            <div class="h5 col-sm-2">Termine</div>
                            <div class="col-sm-10">{promozione.dataFine}</div>
                        </div>

                    </div>

                    <div class="modal-footer">

                        <div class="position-absolute start-0">
                            <button type="button" class="close btn btn-secondary mx-2" data-bs-toggle="modal" data-bs-target="#modificaPromozioneModal" data-bs-whatever={promozione.id}>Modifica</button>
                            <button type="button" class="close btn btn-dark" data-bs-toggle="modal" data-bs-target="#eliminaPromozioneModal" data-bs-whatever={promozione.id}>Elimina</button>
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
