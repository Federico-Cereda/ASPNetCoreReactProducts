import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { UrlBase } from '../../../shared';
import { Promozione } from '../../../model';

export default function EliminaPromozione() {
    const [promozione, setPromozione] = useState<Promozione>(Object)

    useEffect(() => {
        const eliminaPromozioneModal = document.getElementById('eliminaPromozioneModal')!
        eliminaPromozioneModal.addEventListener('show.bs.modal', (event: any) => {
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
        });
    });

    const submit = (e: React.FormEvent<HTMLButtonElement>) => {
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
        <div className="modal fade" id="eliminaPromozioneModal" tabIndex={-1} role="dialog" aria-labelledby="eliminaPromozioneModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog" role="document">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title" id="eliminaPromozioneModalLabel">Conferma Eliminazione</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div className="modal-body w-100 px-3">

                        <div className="col-sm-10 my-1">Sei sicuro di voler eliminare la promozione "{promozione.nome}" ?</div>

                    </div>

                    <div className="modal-footer">

                        <div className="position-absolute start-0">
                            <button type="button" className="close btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#dettagliPromozioneModal" data-bs-whatever={promozione.id}>Dettagli</button>
                            <button type="button" className="close btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modificaPromozioneModal" data-bs-whatever={promozione.id}>Modifica</button>
                        </div>

                        <div className="position-relative end-0">
                            <button type="button" className="close btn btn-light" data-bs-dismiss="modal" aria-label="Close">Annulla</button>
                            <button type="button" className="close btn btn-dark ms-2" onClick={submit}>Elimina</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );

};
