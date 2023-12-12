import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import { useRegister } from './useRegister';

export function Header() {
    const { toggle } = useRegister()

    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li className="nav-item mx-3">
                            <NavLink to="/" className="nav-link px-2 text-warning">Home</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to="/prodotti" className="nav-link px-2 text-white">Prodotti</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to="/marche" className="nav-link px-2 text-white">Marche</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to="/promozioni" className="nav-link px-2 text-white">Promozioni</NavLink>
                        </li>
                    </ul>

                    <button onClick={toggle} className="btn btn-outline-light me-2">
                        Registrati
                    </button>
                    
                </div>
            </div>
        </header>
    )

}
