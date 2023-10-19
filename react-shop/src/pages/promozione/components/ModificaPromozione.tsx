import 'bootstrap/dist/css/bootstrap.css';
import { usePromozione } from '../hooks/usePromozione';

export default function ModificaPromozione() {

    const { promozione, change, submitPut } = usePromozione()

    return (
        <div className="modal fade" id="modificaPromozioneModal" tabIndex={-1} role="dialog" aria-labelledby="modificaPromozioneModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog" role="document">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title" id="modificaPromozioneModalLabel">Modifica</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div className="modal-body">
                        <form className="w-100 px-3">

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Nome</label>
                                <div className="col-sm-10">
                                    <input className="form-control" value={promozione.nome} name="nome" type="text" onChange={change} />
                                </div>
                            </div>

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Valore</label>
                                <div className="col-sm-10">
                                    <input className="form-control" value={promozione.valore} name="valore" type="number" onChange={change} />
                                </div>
                            </div>

                            <div className="form-group row my-4">
                                <label className="h3 col-sm-2 col-form-label">Termine</label>
                                <div className="col-sm-10">
                                    <input className="form-control" value={`${promozione.dataFine?.substring(0, 4)}${promozione.dataFine?.substring(4, 8)}${promozione.dataFine?.substring(8, 10)}`} name="dataFine" type="date" onChange={change} />
                                </div>
                            </div>

                        </form>
                    </div>

                    <div className="modal-footer">
                        
                        <div className="position-absolute start-0">
                            <button type="button" className="close btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#dettagliPromozioneModal" data-bs-whatever={promozione.id}>Dettagli</button>
                            <button type="button" className="close btn btn-dark" data-bs-toggle="modal" data-bs-target="#eliminaPromozioneModal" data-bs-whatever={promozione.id}>Elimina</button>
                        </div>

                        <div className="position-relative end-0">
                            <button type="button" className="close btn btn-light" data-bs-dismiss="modal" aria-label="Close">Annulla</button>
                            <button type="button" className="btn btn-secondary ms-2" onClick={submitPut}>Modifica</button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );

};
