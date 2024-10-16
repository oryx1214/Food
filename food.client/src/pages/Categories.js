import React from 'react';
import './Categories.css';

const Categories = () => {
    const categories = ['Обед', 'Ужин', 'Здоровая еда', 'Закуски', 'Десерты'];

    return (
        <div className="categories-container">
            {categories.map((category, index) => (
                <div key={index} className="category-card">
                    <h3>{category}</h3>
                </div>
            ))}
        </div>
    );
};

export default Categories;
