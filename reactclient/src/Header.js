import React from 'react';

export default function Header() {

    return (
        <div className='header' class="w-100 p-3 bg-secondary position-fixed h-100% d-inline-block">
            <nav class="navbar navbar-expand-lg navbar-light">
                <ul className='navbar-nav'>
                    <li class="nav-item">
                        <a class="nav-link" href='/'>
                            Home
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )

}
