import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { UrlBase } from '../../../shared';
import { Marca } from '../../../model';

export default function ModificaMarca() {
    const initialData: Marca = {
        id: 0,
        nome: ''
    };
    const [marca, setMarca] = useState<Marca>(initialData);

    useEffect(() => {
        const modificaMarcaModal = document.getElementById('modificaMarcaModal')!
        modificaMarcaModal.addEventListener('show.bs.modal', (event: any) => {
            const button = event.relatedTarget
            const id = button.getAttribute('data-bs-whatever')
            const url = `${UrlBase.API_MARCA}/${id}`;
            fetch(url, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(result => {
                setMarca(result);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        });
    });

    const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setMarca(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = UrlBase.API_MARCA;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(marca)
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
        <div className="modal fade" id="modificaMarcaModal" tabIndex={-1} role="dialog" aria-labelledby="modificaMarcaModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog" role="document">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title" id="modificaMarcaModalLabel">Modifica</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div className="modal-body">
                        <form className="w-100 px-3" onSubmit={submit}>

                            <div className="form-group row my-4">
                                <label className="h3 col-sm-2 col-form-label">Nome</label>
                                <div className="col-sm-10">
                                    <input className="form-control" value={marca.nome} name="nome" type="text" onChange={change} />
                                </div>
                            </div>

                            <div className="modal-footer">
                                
                                <div className="position-absolute start-0">
                                    <button type="button" className="close btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#dettagliMarcaModal" data-bs-whatever={marca.id}>Dettagli</button>
                                    <button type="button" className="close btn btn-dark" data-bs-toggle="modal" data-bs-target="#eliminaMarcaModal" data-bs-whatever={marca.id}>Elimina</button>
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
