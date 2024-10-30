import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [name, setName] = useState(''); // Новое состояние для имени
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    // Проверяем совпадение паролей
    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    // Проверяем значение переменной окружения
    console.log("API URL:", process.env.REACT_APP_API_URL); // Добавляем лог для проверки API URL

    try {
      // Выполняем запрос на регистрацию
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/Auth/Register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: name, email, password, confirmPassword }), // Добавляем имя в запрос
      });

      const data = await response.json();

      // Обрабатываем ответ сервера
      if (response.ok) {
        console.log('Регистрация успешна:', data);
      } else {
        alert(data.message || 'Ошибка при регистрации');
      }
    } catch (error) {
      console.error('Ошибка запроса:', error);
      alert('Не удалось подключиться к серверу');
    }
  };

  return (
    <div className="register-container">
      <h2>Регистрация</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Имя:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Подтвердите пароль:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;
