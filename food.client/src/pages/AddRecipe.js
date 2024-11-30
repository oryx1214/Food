import React, { useState } from 'react';
import './AddRecipe.css';

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [image, setImage] = useState(null);
  const [steps, setSteps] = useState(['']);
  const [successMessage, setSuccessMessage] = useState('');

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleStepChange = (index, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = value;
    setSteps(updatedSteps);
  };

  const addStep = () => {
    setSteps([...steps, '']);
  };

  const removeStep = (index) => {
    if (steps.length > 1) {
      const updatedSteps = steps.filter((_, i) => i !== index);
      setSteps(updatedSteps);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Создаем объект FormData для отправки данных
    const formData = new FormData();
    formData.append("Name", recipeName);
    formData.append("Category", category);
    formData.append("Difficulty", difficulty);
    formData.append("Steps", JSON.stringify(steps)); // Преобразуем шаги в строку JSON
    if (image) {
      formData.append("Image", image); // Добавляем файл изображения
    }

    try {
      // Отправляем запрос на сервер
      const response = await fetch("https://localhost:7045/api/recipe", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccessMessage('Рецепт успешно загружен!');
        // После успешной загрузки, очищаем форму
        setRecipeName('');
        setCategory('');
        setDifficulty('');
        setImage(null);
        setSteps(['']);
      } else {
        setSuccessMessage('Ошибка при загрузке рецепта');
      }
    } catch (error) {
      setSuccessMessage('Произошла ошибка, попробуйте снова');
      console.error("Error:", error);
    }
  };

  return (
    <div className="add-recipe-container">
      <h2>Добавить рецепт</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="recipe-form">
        <div className="input-field">
          <label htmlFor="recipe-name">Название рецепта:</label>
          <input
            type="text"
            id="recipe-name"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            required
            placeholder="Введите название рецепта"
          />
        </div>
        <div className="input-field">
          <label htmlFor="category">Категория:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>
              Выберите категорию
            </option>
            <option value="breakfast">Завтрак</option>
            <option value="lunch">Обед</option>
            <option value="dinner">Ужин</option>
            <option value="snack">Закуски</option>
            <option value="dessert">Десерт</option>
            
          </select>
        </div>
        <div className="input-field">
          <label>Сложность:</label>
          <div className="difficulty-options">
            {['Легко', 'Средне', 'Сложно'].map((label, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="difficulty"
                  value={label.toLowerCase()}
                  onChange={(e) => setDifficulty(e.target.value)}
                  required
                />
                {label}
              </label>
            ))}
          </div>
        </div>
        <div className="input-field">
          <label htmlFor="recipe-image">Фото рецепта:</label>
          <input className="fff" type="file" id="recipe-image" onChange={handleImageUpload} />
        </div>
        <div className="input-field">
          <label>Шаги приготовления:</label>
          <div className="steps-container">
            {steps.map((step, index) => (
              <div key={index} className="step-item">
                <input
                  type="text"
                  value={step}
                  onChange={(e) => handleStepChange(index, e.target.value)}
                  placeholder={`Шаг ${index + 1}`}
                  required
                />
                {steps.length > 1 && index !== steps.length - 1 && (
                  <button
                    type="button"
                    className="remove-step-button"
                    onClick={() => removeStep(index)}
                  >
                    Удалить
                  </button>
                )}
              </div>
            ))}
          </div>
          <button type="button" className="add-step-button" onClick={addStep}>
            Добавить шаг
          </button>
        </div>
        <button type="submit" className="submit-recipe-button">
          Загрузить рецепт
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
