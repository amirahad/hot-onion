import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import navLogo from '../../assets/logo2.png'
import './Navbar.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <Link to="/">
                <img src={navLogo} alt="" className="navbar__logo" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto center">
                    <li className="nav-item active">
                        <NavLink className="nav-link active" to="/#">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <HashLink className='nav-link' smooth to="/home#meals">
                            Meals
                        </HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink className="nav-link" smooth to="/home#experts">
                            Our Experts
                        </HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink className="nav-link" smooth to="/home#contacts">
                            Contact Us
                        </HashLink>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link nav__cart__icon" to="/#">
                            <AddShoppingCartIcon active />
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/#">
                            <button className="nav__button__active">Sign In</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
