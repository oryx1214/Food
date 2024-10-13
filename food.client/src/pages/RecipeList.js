import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <h2>Список Рецептов</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
