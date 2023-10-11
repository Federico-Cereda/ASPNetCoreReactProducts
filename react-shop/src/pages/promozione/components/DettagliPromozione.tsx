import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { UrlBase } from '../../../shared';
import { Promozione } from '../../../model';

export default function DettagliPromozione() {
    const initialData : Promozione = {
        id: 0,
        nome: '',
        valore: 0,
        dataFine: ''
    };
    const [promozione, setPromozione] = useState<Promozione>(initialData)

    useEffect(() => {
        const dettagliPromozioneModal = document.getElementById('dettagliPromozioneModal')!
        dettagliPromozioneModal.addEventListener('show.bs.modal', (event: any) => {
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
    }, []);

    return (
        <div className="modal fade" id="dettagliPromozioneModal" tabIndex={-1} role="dialog" aria-labelledby="dettagliPromozioneModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog" role="document">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title" id="dettagliPromozioneModalLabel">Dettagli</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div className="modal-body w-100 px-3">

                        <div className="row mt-4">
                            <div className="h5 col-sm-2">Nome</div>
                            <div className="col-sm-10">{promozione.nome}</div>
                        </div>

                        <div className="row mt-4">
                            <div className="h5 col-sm-2">Valore (%)</div>
                            <div className="col-sm-10">{promozione.valore}</div>
                        </div>

                        <div className="row my-4">
                            <div className="h5 col-sm-2">Termine</div>
                            <div className="col-sm-10">{promozione.dataFine?.substring(8, 10)}{promozione.dataFine?.substring(4, 8)}{promozione.dataFine?.substring(0, 4)}</div>
                        </div>

                    </div>

                    <div className="modal-footer">

                        <div className="position-absolute start-0">
                            <button type="button" className="close btn btn-secondary mx-2" data-bs-toggle="modal" data-bs-target="#modificaPromozioneModal" data-bs-whatever={promozione.id}>Modifica</button>
                            <button type="button" className="close btn btn-dark" data-bs-toggle="modal" data-bs-target="#eliminaPromozioneModal" data-bs-whatever={promozione.id}>Elimina</button>
                        </div>

                        <div className="position-relative end-0">
                            <button type="button" className="close btn btn-light" data-bs-dismiss="modal" aria-label="Close">Chiudi</button>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    );

};
