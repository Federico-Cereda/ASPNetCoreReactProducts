import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { useEffect, useState } from 'react';
import UrlBase from '../UrlBase';

export default function TabellaProdotti() {

    const [prodotti, setProdotti] = useState([])
    useEffect(() => {
        const url = UrlBase.API_PRODOTTO;
        fetch(url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(result => {
                setProdotti(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });

    }, []);

    return (
        <div class="text-center">
            <h1 class="my-5">Lista Prodotti</h1>
            <button type="button" class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#creaProdottoModal">Aggiungi nuovo prodotto</button>
            <div className="table-responsive mt-5">
                <table className="table table-bordered border-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Prezzo</th>
                            <th scope="col">Peso</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Promozione</th>
                            <th scope="col">CRUD Operations</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">
                        {prodotti.map((prodotto) => (
                            <tr key={prodotto.id}>
                                <th scope="row">{prodotto.id}</th>
                                <td>{prodotto.nome}</td>
                                <td>{prodotto.prezzo} €</td>
                                <td>{prodotto.peso} g</td>
                                <td>{prodotto.idMarcaNavigation.nome}</td>
                                <td>{prodotto.idPromozioneNavigation.nome}</td>
                                <td>
                                    <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#dettagliProdottoModal" data-bs-whatever={prodotto.id}>Dettagli</button>
                                    <button type="button" class="btn btn-secondary btn-sm mx-1 my-1" data-bs-toggle="modal" data-bs-target="#modificaProdottoModal" data-bs-whatever={prodotto.id}>Modifica</button>
                                    <button type="button" class="btn btn-dark btn-sm" data-bs-toggle="modal" data-bs-target="#eliminaProdottoModal" data-bs-whatever={prodotto.id}>Elimina</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

};
