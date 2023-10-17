import 'bootstrap/dist/css/bootstrap.css';
import { useProdotto } from '../hooks/useProdotto';

export default function EliminaProdotto() {

    const { prodotto, submitDelete } = useProdotto()

    return (
        <div className="modal fade" id="eliminaProdottoModal" tabIndex={-1} role="dialog" aria-labelledby="eliminaProdottoModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog" role="document">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title" id="eliminaProdottoModalLabel">Conferma Eliminazione</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div className="modal-body w-100 px-3">

                        <div className="col-sm-10 my-1">Sei sicuro di voler eliminare il prodotto "{prodotto.nome}" ?</div>

                    </div>

                    <div className="modal-footer">

                        <div className="position-absolute start-0">
                            <button type="button" className="close btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#dettagliProdottoModal" data-bs-whatever={prodotto.id}>Dettagli</button>
                            <button type="button" className="close btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modificaProdottoModal" data-bs-whatever={prodotto.id}>Modifica</button>
                        </div>

                        <div className="position-relative end-0">
                            <button type="button" className="close btn btn-light" data-bs-dismiss="modal" aria-label="Close">Annulla</button>
                            <button type="button" className="close btn btn-dark ms-2" onClick={submitDelete}>Elimina</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );

};
