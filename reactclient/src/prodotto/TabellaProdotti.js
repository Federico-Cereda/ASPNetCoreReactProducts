import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { useEffect, useState } from 'react';

export default function TabellaProdotti() {

    const [prodotti, setProdotti] = useState([])
    useEffect(() => {
        fetch('https://localhost:7273/api/Prodotto', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(result => {
                setProdotti(result);
            })
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
                                <td>
                                    <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#dettagliProdottoModal" data-bs-whatever={prodotto.id}>Dettagli</button>
                                    <button type="button" class="btn btn-secondary btn-sm mx-1 my-1" data-bs-toggle="modal" data-bs-target="#modificaProdottoModal" data-bs-whatever={prodotto.id}>Modifica</button>
                                    <button className="btn btn-dark btn-sm">Elimina</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}
