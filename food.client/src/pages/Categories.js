import React from 'react';
import './Categories.css';

const Categories = () => {
    const categories = [
        { name: 'Десерты', image: '/images/dessert.png' },   
        { name: 'Здоровая еда', image: '/images/healthy.png' },      
        { name: 'Завтрак', image: '/images/breakfast.png' },
        { name: 'Обед', image: '/images/lunch.png' },
        { name: 'Ужин', image: '/images/dinner.png' },
        { name: 'Закуски', image: '/images/snacks.png' },
        { name: 'Выпечка', image: '/images/baking.png' },
        { name: 'Напитки', image: '/images/drinks.png' },
        { name: 'Салаты', image: '/images/salads.png' },
        
        { name: 'Вегетарианская еда', image: '/images/vegetarian.png' }
    ];

    return (
        <div className="categories-container">
            {categories.map((category, index) => (
                <div key={index} className="category-card">
                    <img src={category.image} alt={category.name} />
                    <h3>{category.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default Categories;
