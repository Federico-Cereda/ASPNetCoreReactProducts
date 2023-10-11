import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { Marca, ProdottoFormCrea, Promozione } from '../../../model';
import { UrlBase } from '../../../shared';

export default function CreaProdotto() {
    const initialData : ProdottoFormCrea = {
        nome: '',
        prezzo: 0,
        peso: 0,
    };
    const [prodotto, setProdotto] = useState<ProdottoFormCrea>(initialData);
    const [marche, setMarche] = useState<Marca[]>([]);
    const [promozioni, setPromozioni] = useState<Promozione[]>([]);

    useEffect(() => {
        const url = UrlBase.API_MARCA;
        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(result => {
            setMarche(result);
        })
        .catch((error) => {
            console.log(error);
            alert(error);
        });
    }, []);

    useEffect(() => {
        const url = UrlBase.API_PROMOZIONE;
        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(result => {
            setPromozioni(result);
        })
        .catch((error) => {
            console.log(error);
            alert(error);
        });
    }, []);

    const close = () => {
        setProdotto({ ...initialData });
    };

    const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setProdotto(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = UrlBase.API_PRODOTTO;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(prodotto)
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
        <div className="modal fade" id="creaProdottoModal" tabIndex={-1} role="dialog" aria-labelledby="creaProdottoModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog modal-lg" role="document">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title" id="creaProdottoModalLabel">Nuovo prodotto</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={close}></button>

                    </div>

                    <div className="modal-body">
                        <form className="w-100 px-3" onSubmit={submit}>

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Nome</label>
                                <div className="col-sm-6">
                                    <input className="form-control" name="nome" type="text" value={prodotto.nome} onChange={change} />
                                </div>
                            </div>

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Prezzo</label>
                                <div className="col-sm-6">
                                    <input className="form-control" name="prezzo" type="currency" value={prodotto.prezzo} onChange={change} />
                                </div>
                            </div>

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Peso</label>
                                <div className="col-sm-6">
                                    <input className="form-control" name="peso" type="number" value={prodotto.peso} onChange={change} />
                                </div>
                            </div>

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Marca</label>
                                <div className="col-sm-6">
                                    <select className="form-select" name="idMarca" value={prodotto.idMarca} onChange={change} >
                                        <option value={0}>Nessuna</option>
                                        {marche.map((marca) => (
                                            <option key={marca.id} value={marca.id}>
                                                {marca.nome}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button type="button" className="btn btn-outline-success btn-sm col-sm-4" data-bs-toggle="modal" data-bs-target="#creaMarcaModal">Aggiungi nuova marca</button>
                            </div>

                            <div className="form-group row my-4">
                                <label className="h3 col-sm-2 col-form-label">Promozione</label>
                                <div className="col-sm-6">
                                    <select className="form-select" name="idPromozione" value={prodotto.idPromozione} onChange={change}  >
                                        <option value={0}>Nessuna</option>
                                        {promozioni.map((promozione) => (
                                            <option key={promozione.id} value={promozione.id}>
                                                {promozione.nome}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button type="button" className="btn btn-outline-success btn-sm col-sm-4" data-bs-toggle="modal" data-bs-target="#creaPromozioneModal">Aggiungi nuova promozione</button>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-light" data-bs-dismiss="modal" aria-label="Close" onClick={close}>Annulla</button>
                                <button type="submit" className="btn btn-success ms-2">Aggiungi</button>
                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </div>
    );

};
