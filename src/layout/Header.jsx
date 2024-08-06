import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlassPlus} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <header>
            <nav className="p-4 navbar header navbar-expand-lg navbar-light">
        <div className="container navbar-custom">
            <div className="navbar-section">
            <a className='logo' href="#">COLO <span className='text-danger'>SHOP</span></a>
            
            </div>
            <div className="navbar-section">
                <ul className="navbar-nav navbar-resp">
                    <li className="nav-item">
                    <Link className="nav-link text-dark" to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Promotion</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Pages</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to={"Basket"}>Basket</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to={"Wishlist"}>Wishlist</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to={"Add"}>Add</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-section">
                <ul className="navbar-nav ">
                    <ul className='navbar-resp d-flex'>
                        <li className="nav-item me-4 nav-link">
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                    </li>
                    <li className="nav-item me-4 nav-link">
                    <FontAwesomeIcon icon={faUser} />
                    </li>
                    <li className="nav-item nav-link">
                    <FontAwesomeIcon icon={faCartPlus} />
                    </li>
                    </ul>
                    
                    <li className="nav-item nav-link bars">
                    <FontAwesomeIcon icon={faBars} />
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
        </header>

)
}

export default Header

