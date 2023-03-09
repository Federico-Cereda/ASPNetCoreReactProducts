import React from 'react';

export default function Header() {

    return (
        <div className='header' class="w-100 bg-secondary position-fixed h-100% d-inline-block">
            <nav class="navbar navbar-expand-lg navbar-light">
                <ul className='navbar-nav'>
                    <li class="nav-item mx-3">
                        <a class="nav-link font-weight-bolder text-uppercase" href='/'>
                            Lista prodotti
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )

}
