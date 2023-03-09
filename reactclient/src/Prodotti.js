import React, { useEffect, useState } from "react"

export default function Prodotti(props) {

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
                            <td>{prodotto.idMarca}</td>
                            <td>
                                <button className="btn btn-primary btn-sm">Detagli</button>
                                <button className="btn btn-secondary btn-sm mx-1 my-1">Aggiorna</button>
                                <button className="btn btn-dark btn-sm">Elimina</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
