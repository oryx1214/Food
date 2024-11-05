import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SubmitButton from './SmallComponents/SubmitButton';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={`${process.env.PUBLIC_URL}/Images/logo.jpg`} alt="TastyBytes Logo" className="navbar-logo-img" />
                    </Link>
                </div>
                <SubmitButton />
            </div>
            <div className="navbar-links">
                <Link to="/">Главная</Link>
                <Link to="/categories">Категории</Link>
                <Link to="/favorites">Избранное</Link>
                <Link to="/about">О нас</Link>
                <Link to="/contact">Контакты</Link>
                <Link to="/login">Вход</Link>
                <span> / </span>
                <Link to="/register">Регистрация</Link>
            </div>
            <div className="navbar-search">
                <input type="text" placeholder="Поиск..." />
                <button className="search-button">Найти</button>
            </div>

            
        </nav>
    );
};

export default Navbar;
