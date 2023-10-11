import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { UrlBase } from '../../../shared';
import { PromozioneForm } from '../../../model';

export default function CreaPromozione() {
    const initialData : PromozioneForm = {
        nome: '',
        valore: 0,
        dataFine: ''
    };
    const [promozione, setPromozione] = useState(initialData);

    const close = () => {
        setPromozione({ ...initialData });
    };

    const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setPromozione(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = UrlBase.API_PROMOZIONE;
        fetch(url, {
            method: 'POST',
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
        <div className="modal fade" id="creaPromozioneModal" tabIndex={-1} role="dialog" aria-labelledby="creaPromozioneModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog" role="document">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title" id="creaPromozioneModalLabel">Nuova promozione</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={close}></button>

                    </div>

                    <div className="modal-body">
                        <form className="w-100 px-3" onSubmit={submit}>

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Nome</label>
                                <div className="col-sm-10">
                                    <input className="form-control" name="nome" type="text" value={promozione.nome} onChange={change} />
                                </div>
                            </div>

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Valore</label>
                                <div className="col-sm-10">
                                    <input className="form-control" name="valore" type="number" value={promozione.valore} onChange={change} />
                                </div>
                            </div>

                            <div className="form-group row my-4">
                                <label className="h3 col-sm-2 col-form-label">Termine</label>
                                <div className="col-sm-10">
                                    <input className="form-control" name="dataFine" type="date" value={promozione.dataFine} onChange={change} />
                                </div>
                            </div>

                            <div className="modal-footer">
                                
                                <button type="button" className="close btn btn-light" data-bs-dismiss="modal" aria-label="Close" onClick={close}>Annulla</button>
                                <button type="submit" className="close btn btn-success ms-2">Aggiungi</button>

                            </div>

                        </form>
                    </div>

                    

                </div>
            </div>
        </div>
    );

};
