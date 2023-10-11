import 'bootstrap/dist/css/bootstrap.css';
import TabellaProdotti from './components/TabellaProdotti';
import CreaProdotto from './components/CreaProdotto';
import DettagliProdotto from './components/DettagliProdotto';
import ModificaProdotto from './components/ModificaProdotto';
import EliminaProdotto from './components/EliminaProdotto';
import CreaMarca from '../marca/components/CreaMarca';
import CreaPromozione from '../promozione/components/CreaPromozione';

export default function ProdottiPage() {

    return (
        <div className="container">
            <div className="row min-vh-100">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <TabellaProdotti />
                    <CreaProdotto />
                    <DettagliProdotto />
                    <ModificaProdotto />
                    <EliminaProdotto />
                    <CreaMarca />
                    <CreaPromozione />
                </div>
            </div>
        </div>
    )

}
