import 'bootstrap/dist/css/bootstrap.css';
import { useMarcaCrea } from '../hooks/useMarcaCrea';

export default function CreaMarca() {

    const { marca, change, close, submitPost } = useMarcaCrea()

    return (
        <div className="modal fade" id="creaMarcaModal" tabIndex={-1} role="dialog" aria-labelledby="creaMarcaModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog" role="document">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title" id="creaMarcaModalLabel">Nuova marca</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#creaProdottoModal" onClick={close}></button>

                    </div>

                    <div className="modal-body">
                        <form className="w-100 px-3">

                            <div className="form-group row my-4">
                                <label className="h3 col-sm-2 col-form-label">Nome</label>
                                <div className="col-sm-10">
                                    <input className="form-control" name="nome" type="text" value={marca.nome} onChange={change} />
                                </div>
                            </div>

                        </form>
                    </div>

                    <div className="modal-footer">
                        
                        <button type="button" className="close btn btn-light" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#creaProdottoModal" onClick={close}>Annulla</button>
                        <button type="button" className="btn btn-success ms-2" data-bs-toggle="modal" data-bs-target="#creaProdottoModal" onClick={submitPost}>Aggiungi</button>

                    </div>

                </div>

            </div>
        </div>
    );

};
