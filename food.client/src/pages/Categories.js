import React from 'react';
import './Categories.css';

const Categories = () => {
    const categories = [
        { name: 'Завтрак', image: '/images/breakfast.jpg' },
        { name: 'Обед', image: null },
        { name: 'Ужин', image: null },
        { name: 'Здоровая еда', image: null },
        { name: 'Закуски', image: null },
        { name: 'Десерты', image: null },
        { name: 'Напитки', image: null },
        { name: 'Салаты', image: null },
        { name: 'Выпечка', image: null },
        { name: 'Вегетарианская еда', image: null },
    ];

    return (
        <div className="categories-container">
            {categories.map((category, index) => (
                <div key={index} className="category-card">
                    {category.image && <img src={process.env.PUBLIC_URL + category.image} alt={category.name} className="category-image" />}
                    <h3>{category.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default Categories;
