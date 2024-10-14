import React from 'react';
import './SubmitButton.css'; // Убедись, что этот импорт соответствует правильному названию файла

const SubmitButton = () => {
    return (
        <button className="submit-button">
            Отправить рецепт
            <span className="plus-icon">+</span>
            
        </button>
    );
};

export default SubmitButton;
