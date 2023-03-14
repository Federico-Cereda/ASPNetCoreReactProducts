import React from 'react';
import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <div className='header' class="w-100 bg-secondary position-fixed h-100% d-inline-block">
            <nav class="navbar navbar-expand-lg navbar-light">
                <ul className='navbar-nav'>
                    <li class="nav-item mx-3">
                        <NavLink to="/" className="nav-link font-weight-bolder text-uppercase" >Home</NavLink>
                    </li>
                    <li class="nav-item mx-3">
                        <NavLink to="/Prodotti" className="nav-link font-weight-bolder text-uppercase" >Prodotti</NavLink>
                    </li>
                    <li class="nav-item mx-3">
                        <NavLink to="/Marche" className="nav-link font-weight-bolder text-uppercase" >Marche</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )

}
