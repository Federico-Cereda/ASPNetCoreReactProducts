import 'bootstrap/dist/css/bootstrap.css';
import { usePromozioni } from '../hooks/usePromozioni';

export default function TabellaPromozioni() {

    const promozioni = usePromozioni()
    
    return (
        <div className="text-center">
            <h1 className="my-5">Lista Promozioni</h1>
            <button type="button" className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#creaPromozioneModal">Aggiungi nuova promozione</button>
            <div className="table-responsive mt-5">
                <table className="table table-bordered border-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Valore (%)</th>
                            <th scope="col">Data Fine Promozione</th>
                            <th scope="col">CRUD Operations</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">
                        {promozioni.map((promozione) => (
                            <tr key={promozione.id}>
                                <th scope="row">{promozione.id}</th>
                                <td>{promozione.nome}</td>
                                <td>{promozione.valore}</td>
                                <td>{promozione.dataFine?.substring(8, 10)}{promozione.dataFine?.substring(4, 8)}{promozione.dataFine?.substring(0, 4)}</td>
                                <td>
                                    <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#dettagliPromozioneModal" data-bs-whatever={promozione.id}>Dettagli</button>
                                    <button type="button" className="btn btn-secondary btn-sm mx-1 my-1" data-bs-toggle="modal" data-bs-target="#modificaPromozioneModal" data-bs-whatever={promozione.id}>Modifica</button>
                                    <button type="button" className="btn btn-dark btn-sm" data-bs-toggle="modal" data-bs-target="#eliminaPromozioneModal" data-bs-whatever={promozione.id}>Elimina</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

};
