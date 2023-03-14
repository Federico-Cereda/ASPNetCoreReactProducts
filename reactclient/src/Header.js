import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header() {

    return (

        <div className='header' class="w-100 bg-secondary position-fixed h-100% d-inline-block">
            <nav class="navbar navbar-expand-lg navbar-light">
                <ul className='navbar-nav'>
                    <li class="nav-item mx-3">
                        <a class="nav-link font-weight-bolder text-uppercase" href='/'>Home</a>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li class="nav-item mx-3">
                        {/* <a href='/prodotti'>Prodotti</a> */}
                        <NavLink to="/prodotti" className="nav-link font-weight-bolder text-uppercase" >Prodotti</NavLink>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link font-weight-bolder text-uppercase" href='/marche'>Marche</a>
                        <NavLink to="/marche">Marche</NavLink>
                    </li>
                </ul>
            </nav>
        </div>

    )

}
