import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { UrlBase } from '../../../shared';
import { Marca, ProdottoFormModifica, Promozione } from '../../../model';

export default function ModificaProdotto() {
    const initialData : ProdottoFormModifica = {
        id: 0,
        nome: '',
        prezzo: 0,
        peso: 0,
        idMarca: 0,
        idPromozione: 0
    };
    const [prodotto, setProdotto] = useState<ProdottoFormModifica>(initialData);
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

    useEffect(() => {
        const modificaProdottoModal = document.getElementById('modificaProdottoModal')!
        modificaProdottoModal.addEventListener('show.bs.modal', (event: any) => {
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
                console.log(error);
                alert(error);
            });
        });
    });

    const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setProdotto(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const prodottoModifica : ProdottoFormModifica = {
            id: prodotto.id,
            nome: prodotto.nome,
            prezzo: prodotto.prezzo,
            peso: prodotto.peso,
            idMarca: prodotto.idMarca,
            idPromozione: prodotto.idPromozione
        };
        if (prodottoModifica.idMarca == 0) {
            prodottoModifica.idMarca = undefined
        } else {};
        if (prodottoModifica.idPromozione == 0) {
            prodottoModifica.idPromozione = undefined
        } else {};
        const url = UrlBase.API_PRODOTTO;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(prodottoModifica)
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
        <div className="modal fade" id="modificaProdottoModal" tabIndex={-1} role="dialog" aria-labelledby="modificaProdottoModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog modal-lg" role="document">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title" id="modificaProdottoModalLabel">Modifica</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div className="modal-body">
                        <form className="w-100 px-3" onSubmit={submit}>

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Nome</label>
                                <div className="col-sm-6">
                                    <input className="form-control" value={prodotto.nome} name="nome" type="text" onChange={change} />
                                </div>
                            </div>

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Prezzo</label>
                                <div className="col-sm-6">
                                    <input className="form-control" value={prodotto.prezzo} name="prezzo" type="currency" onChange={change} />
                                </div>
                            </div>

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Peso</label>
                                <div className="col-sm-6">
                                    <input className="form-control" value={prodotto.peso} name="peso" type="number" onChange={change} />
                                </div>
                            </div>

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Marca</label>
                                <div className="col-sm-6">
                                    <select className="form-select" value={prodotto.idMarca} name="idMarca" onChange={change}>
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
                                    <select className="form-select" value={prodotto.idPromozione} name="idPromozione" onChange={change}>
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

                                <div className="position-absolute start-0">
                                    <button type="button" className="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#dettagliProdottoModal" data-bs-whatever={prodotto.id}>Dettagli</button>
                                    <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#eliminaProdottoModal" data-bs-whatever={prodotto.id}>Elimina</button>
                                </div>

                                <div className="position-relative end-0">
                                    <button type="button" className="btn btn-light" data-bs-dismiss="modal" aria-label="Close">Annulla</button>
                                    <button type="submit" className="btn btn-secondary ms-2">Modifica</button>
                                </div>

                            </div>

                        </form>
                    </div>

                </div>
                
            </div>
        </div>
    );

};
