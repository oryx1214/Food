import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Гушбашы</Link>
            </div>
            <div className="navbar-links">
                <Link to="/login">Вход</Link>
                <Link to="/register">Регистрация</Link>
            </div>
            <div className="navbar-search">
                <input type="text" placeholder="Поиск..." />
                <button>Найти</button>
            </div>
        </nav>
    );
};

export default Navbar;
