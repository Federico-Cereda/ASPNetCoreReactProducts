import 'bootstrap/dist/css/bootstrap.css';
import { usePromozione } from '../hooks/usePromozione';

export default function EliminaPromozione() {

    const { promozione, submitDelete } = usePromozione()

    return (
        <div className="modal fade" id="eliminaPromozioneModal" tabIndex={-1} role="dialog" aria-labelledby="eliminaPromozioneModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog" role="document">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title" id="eliminaPromozioneModalLabel">Conferma Eliminazione</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div className="modal-body w-100 px-3">

                        <div className="col-sm-10 my-1">Sei sicuro di voler eliminare la promozione "{promozione.nome}" ?</div>

                    </div>

                    <div className="modal-footer">

                        <div className="position-absolute start-0">
                            <button type="button" className="close btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#dettagliPromozioneModal" data-bs-whatever={promozione.id}>Dettagli</button>
                            <button type="button" className="close btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modificaPromozioneModal" data-bs-whatever={promozione.id}>Modifica</button>
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
