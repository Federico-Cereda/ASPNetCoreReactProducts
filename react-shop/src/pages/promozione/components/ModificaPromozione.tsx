import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { UrlBase } from '../../../shared';
import { Promozione } from '../../../model';

export default function ModificaPromozione() {
    const initialData : Promozione = {
        id: 0,
        nome: '',
        valore: 0,
        dataFine: ''
    };
    const [promozione, setPromozione] = useState<Promozione>(initialData);

    useEffect(() => {
        const modificaPromozioneModal = document.getElementById('modificaPromozioneModal')!
        modificaPromozioneModal.addEventListener('show.bs.modal', (event: any) => {
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

    const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setPromozione(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = UrlBase.API_PROMOZIONE;
        fetch(url, {
            method: 'PUT',
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
        <div className="modal fade" id="modificaPromozioneModal" tabIndex={-1} role="dialog" aria-labelledby="modificaPromozioneModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog" role="document">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title" id="modificaPromozioneModalLabel">Modifica</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div className="modal-body">
                        <form className="w-100 px-3" onSubmit={submit}>

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Nome</label>
                                <div className="col-sm-10">
                                    <input className="form-control" value={promozione.nome} name="nome" type="text" onChange={change} />
                                </div>
                            </div>

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Valore</label>
                                <div className="col-sm-10">
                                    <input className="form-control" value={promozione.valore} name="valore" type="number" onChange={change} />
                                </div>
                            </div>

                            <div className="form-group row my-4">
                                <label className="h3 col-sm-2 col-form-label">Termine</label>
                                <div className="col-sm-10">
                                    <input className="form-control" value={`${promozione.dataFine?.substring(0, 4)}${promozione.dataFine?.substring(4, 8)}${promozione.dataFine?.substring(8, 10)}`} name="dataFine" type="date" onChange={change} />
                                </div>
                            </div>

                            <div className="modal-footer">

                                <div className="position-absolute start-0">
                                    <button type="button" className="close btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#dettagliPromozioneModal" data-bs-whatever={promozione.id}>Dettagli</button>
                                    <button type="button" className="close btn btn-dark" data-bs-toggle="modal" data-bs-target="#eliminaPromozioneModal" data-bs-whatever={promozione.id}>Elimina</button>
                                </div>

                                <div className="position-relative end-0">
                                    <button type="button" className="close btn btn-light" data-bs-dismiss="modal" aria-label="Close">Annulla</button>
                                    <button type="submit" className="close btn btn-secondary ms-2">Modifica</button>
                                </div>

                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </div>
    );

};
