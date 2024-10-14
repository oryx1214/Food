import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SubmitButton from './SmallComponents/SubmitButton'; // Импортируем компонент кнопки

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <Link to="/">TastyBytes</Link>
                </div>
                <SubmitButton />
            </div>
            <div className="navbar-links">
                <Link to="/">Главная</Link>
                <Link to="/login">Вход</Link>
                <span> / </span>
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
