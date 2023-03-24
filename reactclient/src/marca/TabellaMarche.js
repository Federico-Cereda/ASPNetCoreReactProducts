import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { useEffect, useState } from 'react';

export default function TabellaMarche() {

    const [marche, setMarche] = useState([])
    useEffect(() => {
        fetch('https://localhost:7273/api/Marca', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(result => {
                setMarche(result);
            })
    }, [])

    return (
        <div class="text-center">
            <h1 class="my-5">Lista Marche</h1>
            <button type="button" class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#creaMarcaModal">Aggiungi nuova marca</button>
            <div className="table-responsive mt-5">
                <table className="table table-bordered border-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">CRUD Operations</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">
                        {marche.map((marca) => (
                            <tr key={marca.id}>
                                <th scope="row">{marca.id}</th>
                                <td>{marca.nome}</td>
                                <td>
                                    <button className="btn btn-primary btn-sm">Detagli</button>
                                    <button className="btn btn-secondary btn-sm mx-1 my-1">Modifica</button>
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
