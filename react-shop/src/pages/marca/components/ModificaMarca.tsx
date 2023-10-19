import 'bootstrap/dist/css/bootstrap.css';
import { useMarca } from '../hooks/useMarca';

export default function ModificaMarca() {

    const { marca, change, submitPut } = useMarca()

    return (
        <div className="modal fade" id="modificaMarcaModal" tabIndex={-1} role="dialog" aria-labelledby="modificaMarcaModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog" role="document">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title" id="modificaMarcaModalLabel">Modifica</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div className="modal-body">
                        <form className="w-100 px-3">

                            <div className="form-group row my-4">
                                <label className="h3 col-sm-2 col-form-label">Nome</label>
                                <div className="col-sm-10">
                                    <input className="form-control" value={marca.nome} name="nome" type="text" onChange={change} />
                                </div>
                            </div>

                        </form>
                    </div>

                    <div className="modal-footer">
                        
                        <div className="position-absolute start-0">
                            <button type="button" className="close btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#dettagliMarcaModal" data-bs-whatever={marca.id}>Dettagli</button>
                            <button type="button" className="close btn btn-dark" data-bs-toggle="modal" data-bs-target="#eliminaMarcaModal" data-bs-whatever={marca.id}>Elimina</button>
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
