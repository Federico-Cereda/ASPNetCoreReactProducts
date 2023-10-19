import 'bootstrap/dist/css/bootstrap.css';
import { useProdotto } from '../hooks/useProdotto';

export default function DettagliProdotto() {

    const { prodotto } = useProdotto()

    return (
        <div className="modal fade" id="dettagliProdottoModal" tabIndex={-1} role="dialog" aria-labelledby="dettagliProdottoModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div className="modal-dialog" role="document">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title" id="dettagliProdottoModalLabel">Dettagli</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div className="modal-body w-100 px-3">

                        <div className="row mt-4">
                            <div className="h5 col-sm-3">Nome</div>
                            <div className="col-sm-9">{prodotto.nome}</div>
                        </div>

                        <div className="row mt-4">
                            <div className="h5 col-sm-3">Prezzo</div>
                            <div className="col-sm-9">{prodotto.prezzo} €</div>
                        </div>

                        <div className="row mt-4">
                            <div className="h5 col-sm-3">Peso</div>
                            <div className="col-sm-9">{prodotto.peso} g</div>
                        </div>

                        <div className="row mt-4">
                            <div className="h5 col-sm-3">Marca</div>
                            <div className="col-sm-9">{prodotto.idMarcaNavigation.nome}</div>
                        </div>

                        <div className="row my-4">
                            <div className="h5 col-sm-3">Promozione</div>
                            <div className="col-sm-9">{prodotto.idPromozioneNavigation.nome}</div>
                        </div>

                    </div>

                    <div className="modal-footer">

                        <div className="position-absolute start-0">
                            <button type="button" className="btn btn-secondary mx-2" data-bs-toggle="modal" data-bs-target="#modificaProdottoModal" data-bs-whatever={prodotto.id}>Modifica</button>
                            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#eliminaProdottoModal" data-bs-whatever={prodotto.id}>Elimina</button>
                        </div>

                        <div className="position-relative end-0">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal" aria-label="Close">Chiudi</button>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    );

};
