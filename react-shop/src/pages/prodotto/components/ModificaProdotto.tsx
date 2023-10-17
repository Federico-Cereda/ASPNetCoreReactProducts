import 'bootstrap/dist/css/bootstrap.css';
import { useProdotto } from '../hooks/useProdotto';
import { useMarche } from '../../marca/hooks/useMarche';
import { usePromozioni } from '../../promozione/hooks/usePromozioni';

export default function ModificaProdotto() {
    
    const marche = useMarche()
    const promozioni = usePromozioni()
    const { prodotto, change, submitPut } = useProdotto()

    return (
        <div className="modal fade" id="modificaProdottoModal" tabIndex={-1} role="dialog" aria-labelledby="modificaProdottoModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog modal-lg" role="document">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title" id="modificaProdottoModalLabel">Modifica</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div className="modal-body">
                        <form className="w-100 px-3" 
                        // onSubmit={submitPut}
                        >

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Nome</label>
                                <div className="col-sm-6">
                                    <input className="form-control" value={prodotto.nome} name="nome" type="text" onChange={change} />
                                </div>
                            </div>

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Prezzo</label>
                                <div className="col-sm-6">
                                    <input className="form-control" value={prodotto.prezzo} name="prezzo" type="currency" onChange={change} />
                                </div>
                            </div>

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Peso</label>
                                <div className="col-sm-6">
                                    <input className="form-control" value={prodotto.peso} name="peso" type="number" onChange={change} />
                                </div>
                            </div>

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Marca</label>
                                <div className="col-sm-6">
                                    <select className="form-select" value={prodotto.idMarca} name="idMarca" onChange={change}>
                                        <option value={0}>Nessuna</option>
                                        {marche.map((marca) => (
                                            <option key={marca.id} value={marca.id}>
                                                {marca.nome}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button type="button" className="btn btn-outline-success btn-sm col-sm-4" data-bs-toggle="modal" data-bs-target="#creaMarcaModal">Aggiungi nuova marca</button>
                            </div>

                            <div className="form-group row my-4">
                                <label className="h3 col-sm-2 col-form-label">Promozione</label>
                                <div className="col-sm-6">
                                    <select className="form-select" value={prodotto.idPromozione} name="idPromozione" onChange={change}>
                                        <option value={0}>Nessuna</option>
                                        {promozioni.map((promozione) => (
                                            <option key={promozione.id} value={promozione.id}>
                                                {promozione.nome}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button type="button" className="btn btn-outline-success btn-sm col-sm-4" data-bs-toggle="modal" data-bs-target="#creaPromozioneModal">Aggiungi nuova promozione</button>
                            </div>

                        </form>
                    </div>

                    <div className="modal-footer">
                        
                        <div className="position-absolute start-0">
                            
                            <button type="button" className="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#dettagliProdottoModal" data-bs-whatever={prodotto.id}>Dettagli</button>
                            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#eliminaProdottoModal" data-bs-whatever={prodotto.id}>Elimina</button>

                        </div>

                        <div className="position-relative end-0">

                            <button type="button" className="btn btn-light" data-bs-dismiss="modal" aria-label="Close">Annulla</button>
                            <button type="button" className="btn btn-secondary ms-2" onClick={submitPut}>Modifica</button>
                            
                        </div>

                    </div>

                </div>
                
            </div>
        </div>
    );

};
