import React from 'react';
import { Link } from 'react-router-dom';
import './SubmitButton.css';

const SubmitButton = () => {
    return (
        <Link to="/add-recipe" className="submit-link">
            <button className="submit-button">
                Отправить рецепт
                <span className="plus-icon">+</span>
            </button>
        </Link>
    );
};

export default SubmitButton;
