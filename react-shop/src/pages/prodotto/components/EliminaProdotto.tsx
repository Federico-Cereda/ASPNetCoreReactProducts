import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { UrlBase } from '../../../shared';
import { Prodotto } from '../../../model';

export default function EliminaProdotto() {
    const [prodotto, setProdotto] = useState<Prodotto>(Object)

    useEffect(() => {
        const eliminaProdottoModal = document.getElementById('eliminaProdottoModal')!
        eliminaProdottoModal.addEventListener('show.bs.modal', (event: any) => {
            const button = event.relatedTarget
            const id = button.getAttribute('data-bs-whatever')
            const url = `${UrlBase.API_PRODOTTO}/${id}`;
            fetch(url, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(result => {
                setProdotto(result);
            })
            .catch((error) => {
                console.log(error)
                alert(error);
            });
        });
    });

    const submit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const url = `${UrlBase.API_PRODOTTO}?id=${prodotto.id}`;
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
        <div className="modal fade" id="eliminaProdottoModal" tabIndex={-1} role="dialog" aria-labelledby="eliminaProdottoModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog" role="document">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title" id="eliminaProdottoModalLabel">Conferma Eliminazione</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div className="modal-body w-100 px-3">

                        <div className="col-sm-10 my-1">Sei sicuro di voler eliminare il prodotto "{prodotto.nome}" ?</div>

                    </div>

                    <div className="modal-footer">

                        <div className="position-absolute start-0">
                            <button type="button" className="close btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#dettagliProdottoModal" data-bs-whatever={prodotto.id}>Dettagli</button>
                            <button type="button" className="close btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modificaProdottoModal" data-bs-whatever={prodotto.id}>Modifica</button>
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
