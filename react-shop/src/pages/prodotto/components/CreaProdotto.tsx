import 'bootstrap/dist/css/bootstrap.css';
import { useProdottoCrea } from '../hooks/useProdottoCrea';
// import { useMarche } from '../../marca/hooks/useMarche';
import { usePromozioni } from '../../promozione/hooks/usePromozioni';
import ListaMarche from './ListaMarche';

export default function CreaProdotto() {

    // const { marche, getMarche } = useMarche()
    const promozioni = usePromozioni()
    const { prodotto, change, close, submitPost } = useProdottoCrea()

    // getMarche();

    return (
        <div className="modal fade" id="creaProdottoModal" tabIndex={-1} role="dialog" aria-labelledby="creaProdottoModalLabel" aria-hidden="true" 
        // data-bs-backdrop="static"
        >
            <div className="modal-dialog modal-lg" role="document">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title" id="creaProdottoModalLabel">Nuovo prodotto</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={close}></button>

                    </div>

                    <div className="modal-body">
                        <form className="w-100 px-3">

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Nome</label>
                                <div className="col-sm-6">
                                    <input className="form-control" name="nome" type="text" value={prodotto.nome} onChange={change} />
                                </div>
                            </div>

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Prezzo</label>
                                <div className="col-sm-6">
                                    <input className="form-control" name="prezzo" type="currency" value={prodotto.prezzo} onChange={change} />
                                </div>
                            </div>

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Peso</label>
                                <div className="col-sm-6">
                                    <input className="form-control" name="peso" type="number" value={prodotto.peso} onChange={change} />
                                </div>
                            </div>

                            <div className="form-group row mt-4">
                                <label className="h3 col-sm-2 col-form-label">Marca</label>
                                <div className="col-sm-6">
                                    <ListaMarche />
                                    {/* <select className="form-select" name="idMarca" value={prodotto.idMarca} onChange={change}>
                                        <option value={0}>Nessuna</option>
                                        {marche.map((marca) => (
                                            <option key={marca.id} value={marca.id}>
                                                {marca.nome}
                                            </option>
                                        ))}
                                    </select> */}
                                </div>
                                <button type="button" className="btn btn-outline-success btn-sm col-sm-4" data-bs-toggle="modal" data-bs-target="#creaMarcaModal">Aggiungi nuova marca</button>
                            </div>

                            <div className="form-group row my-4">
                                <label className="h3 col-sm-2 col-form-label">Promozione</label>
                                <div className="col-sm-6">
                                    <select className="form-select" name="idPromozione" value={prodotto.idPromozione} onChange={change}>
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

                        <button type="button" className="btn btn-light" data-bs-dismiss="modal" aria-label="Close" onClick={close}>Annulla</button>
                        <button type="button" className="btn btn-success ms-2" onClick={submitPost}>Aggiungi</button>
                    
                    </div>

                </div>

            </div>
        </div>
        <CreaMarca />
        <CreaPromozione />
        </>
    );

};
