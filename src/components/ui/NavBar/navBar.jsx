// IMPORT REACT & CSS
import React from 'react'
import './navBar.css'

const NavBar = () => {
    return (
        <header className="navbar-wrapper">
            <nav>
                <ul className="navbar">
                    <li className="link"><i className="fas fa-bars"></i>Browse</li>
                    <li className="link"><i className="fas fa-plus"></i>Add new questions</li>
                    <li className="link"><i className="fas fa-cogs"></i>API</li>
                    <li className="link"><i className="fas fa-comments"></i>Discuss</li>
                    <li className="link"><i className="fas fa-sign-in-alt"></i>Login</li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar

