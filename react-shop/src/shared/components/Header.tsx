import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import { useRegister } from './useRegister';

export function Header() {
    const { toggle } = useRegister()

    return (
        <div className="header w-100 bg-secondary position-fixed h-100% d-inline-block">
            <nav className="navbar navbar-expand-lg navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item mx-3">
                        <NavLink to="/" className="nav-link font-weight-bolder text-uppercase">Home</NavLink>
                    </li>
                    <li className="nav-item mx-3">
                        <NavLink to="/prodotti" className="nav-link font-weight-bolder text-uppercase">Prodotti</NavLink>
                    </li>
                    <li className="nav-item mx-3">
                        <NavLink to="/marche" className="nav-link font-weight-bolder text-uppercase">Marche</NavLink>
                    </li>
                    <li className="nav-item mx-3">
                        <NavLink to="/promozioni" className="nav-link font-weight-bolder text-uppercase">Promozioni</NavLink>
                    </li>
                    <li className="nav-item mx-3">
                        <NavLink to="/registrazione" className="nav-link font-weight-bolder text-uppercase">Registrazione</NavLink>
                    </li>
                </ul>
            </nav>

            <button onClick={toggle} className="btn accent lg">
                Registrati
            </button>

            {/* { isOpen && <Register /> } */}

        </div>
    )

}
