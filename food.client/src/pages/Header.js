import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <nav>
    <Link to="/login">Вход</Link> | 
    <Link to="/register">Регистрация</Link> | 
    <Link to="/add-recipe">Добавить рецепт</Link> | 
    <Link to="/recipes">Рецепты</Link>
  </nav>
);

export default Header;
