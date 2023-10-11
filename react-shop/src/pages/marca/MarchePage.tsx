import 'bootstrap/dist/css/bootstrap.css';
import TabellaMarche from './components/TabellaMarche';
import CreaMarca from './components/CreaMarca';
import DettagliMarca from './components/DettagliMarca';
import ModificaMarca from './components/ModificaMarca';
import EliminaMarca from './components/EliminaMarca';

export default function MarchePage() {

    return (
        <div className="container">
            <div className="row min-vh-100">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <TabellaMarche />
                    <CreaMarca />
                    <DettagliMarca />
                    <ModificaMarca />
                    <EliminaMarca />
                </div>
            </div>
        </div>
    )

}
