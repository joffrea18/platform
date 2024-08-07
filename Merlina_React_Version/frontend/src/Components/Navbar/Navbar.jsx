import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import shop_icon from '../Assets/shop_car.jpeg';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='' />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {setMenu("shoes")}}><Link style={{textDecoration : 'none' }} to='/'>Shoes</Link>{menu === "shoes" ? <hr/> : <></> } </li>
                <li onClick={() => {setMenu("electronic")}}><Link style={{textDecoration : 'none' }} to='/electronic'>Electonic</Link>{menu === "electronic" ? <hr/> : <></> } </li>
                <li onClick={() => {setMenu("contact")}}><Link style={{textDecoration : 'none' }} to='/contact'>Contact</Link>{menu === "contact" ? <hr/> : <></> } </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={shop_icon} alt="shop car"/></Link>
            </div>
            <div className="nav-cart-count">
                0
            </div>
        </div>
    );
}

export default Navbar;
