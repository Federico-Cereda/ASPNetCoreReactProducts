import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { UrlBase } from '../../../shared';
import { Marca } from '../../../model';

export default function DettagliMarca() {
    const initialData : Marca = {
        id: 0,
        nome: ''
    };
    const [marca, setMarca] = useState<Marca>(initialData)

    useEffect(() => {
        const dettagliMarcaModal = document.getElementById('dettagliMarcaModal')!
        dettagliMarcaModal.addEventListener('show.bs.modal', (event: any) => {
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
    }, []);

    return (
        <div className="modal fade" id="dettagliMarcaModal" tabIndex={-1} role="dialog" aria-labelledby="dettagliMarcaModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog" role="document">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title" id="dettagliMarcaModalLabel">Dettagli</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div className="modal-body w-100 px-3">

                        <div className="row my-4">
                            <div className="h5 col-sm-2">Nome</div>
                            <div className="col-sm-10">{marca.nome}</div>
                        </div>

                    </div>

                    <div className="modal-footer">

                        <div className="position-absolute start-0">
                            <button type="button" className="close btn btn-secondary mx-2" data-bs-toggle="modal" data-bs-target="#modificaMarcaModal" data-bs-whatever={marca.id}>Modifica</button>
                            <button type="button" className="close btn btn-dark" data-bs-toggle="modal" data-bs-target="#eliminaMarcaModal" data-bs-whatever={marca.id}>Elimina</button>
                        </div>

                        <div className="position-relative end-0">
                            <button type="button" className="close btn btn-light" data-bs-dismiss="modal" aria-label="Close">Chiudi</button>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    );

};
