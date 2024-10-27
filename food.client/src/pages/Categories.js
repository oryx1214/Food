import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
    const categories = [
        { name: 'Десерты', path: '/categories/desserts', image: '/images/dessert.png' },
        { name: 'Здоровая еда', path: '/categories/healthy', image: '/images/healthy.png' },
        { name: 'Завтрак', path: '/categories/breakfast', image: '/images/breakfast.png' },
        { name: 'Обед', path: '/categories/lunch', image: '/images/lunch.png' },
        { name: 'Ужин', path: '/categories/dinner', image: '/images/dinner.png' },
        { name: 'Закуски', path: '/categories/snacks', image: '/images/snacks.png' },
        { name: 'Выпечка', path: '/categories/baking', image: '/images/baking.png' },
        { name: 'Напитки', path: '/categories/drinks', image: '/images/drinks.png' },
        { name: 'Салаты', path: '/categories/salads', image: '/images/salads.png' },
        { name: 'Вегетарианская', path: '/categories/vegetarian', image: '/images/vegetarian.png' }
    ];

    return (
        <div className="categories-container">
            {categories.map((category, index) => (
                <Link to={category.path} key={index} className="category-link">
                    <div className="category-card">
                        <img src={category.image} alt={category.name} />
                        <h3>{category.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Categories;
