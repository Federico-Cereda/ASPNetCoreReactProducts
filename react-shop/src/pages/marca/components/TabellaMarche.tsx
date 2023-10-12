import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { UrlBase } from '../../../shared';
import { Marca } from '../../../model';

export default function TabellaMarche() {
    const [marche, setMarche] = useState<Marca[]>([])
    
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

    return (
        <div className="text-center">
            <h1 className="my-5">Lista Marche</h1>
            <button type="button" className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#creaMarcaModal">Aggiungi nuova marca</button>
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
                                    <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#dettagliMarcaModal" data-bs-whatever={marca.id}>Dettagli</button>
                                    <button type="button" className="btn btn-secondary btn-sm mx-1 my-1" data-bs-toggle="modal" data-bs-target="#modificaMarcaModal" data-bs-whatever={marca.id}>Modifica</button>
                                    <button type="button" className="btn btn-dark btn-sm" data-bs-toggle="modal" data-bs-target="#eliminaMarcaModal" data-bs-whatever={marca.id}>Elimina</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

};
