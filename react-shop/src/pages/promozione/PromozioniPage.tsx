import 'bootstrap/dist/css/bootstrap.css';
import TabellaPromozioni from './components/TabellaPromozioni';
import CreaPromozione from './components/CreaPromozione';
import DettagliPromozione from './components/DettagliPromozione';
import ModificaPromozione from './components/ModificaPromozione';
import EliminaPromozione from './components/EliminaPromozione';

export default function PromozioniPage() {

    return (
        <div className="container">
            <div className="row min-vh-100">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <TabellaPromozioni />
                    <CreaPromozione />
                    <DettagliPromozione />
                    <ModificaPromozione />
                    <EliminaPromozione />
                </div>
            </div>
        </div>
    )

}
