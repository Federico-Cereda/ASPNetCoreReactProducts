import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <>
            {/* <Router>
                <Switch>
                    <Route exact path="/" to="/" />

                    <Route path="/prodotti" />

                    <Route path="/marche" />

                    <Redirect to="/" />
                </Switch>
            </Router> */}

            <div className='header' class="w-100 bg-secondary position-fixed h-100% d-inline-block">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <ul className='navbar-nav'>
                        <li class="nav-item mx-3">
                            {/* <a class="nav-link font-weight-bolder text-uppercase" href='/'>Home</a> */}
                            <Link to="/">Home</Link>
                        </li>
                        <li class="nav-item mx-3">
                            {/* <a class="nav-link font-weight-bolder text-uppercase" href='/prodotti'>Prodotti</a> */}
                            <Link to="/prodotti">Prodotti</Link>
                        </li>
                        <li class="nav-item mx-3">
                            {/* <a class="nav-link font-weight-bolder text-uppercase" href='/marche'>Marche</a> */}
                            <Link to="/marche">Marche</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )

}
