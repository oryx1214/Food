import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [name, setName] = useState(''); // Новое состояние для имени
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // Состояние для ошибки
  const [success, setSuccess] = useState(''); 

  const handleRegister = async (e) => {
    e.preventDefault();

    // Проверяем совпадение паролей
    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    console.log("API URL:", process.env.REACT_APP_API_URL); 

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/Auth/Register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: name, email, password, confirmPassword }), 
      });

      const data = await response.json();

      
      if (response.ok) {
        setSuccess('Регистрация успешна! Пожалуйста, войдите.');
        setError(''); 
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setError(data.message || 'Ошибка при регистрации');
        setSuccess(''); // Очищаем успешное сообщение
      }
    } catch (error) {
      console.error('Ошибка запроса:', error);
      setError('Не удалось подключиться к серверу');
      setSuccess(''); // Очищаем успешное сообщение
    }
  };

  return (

    <div className="register-container">
         <a href="/" className="back-button" aria-label="Вернуться на главную">
         ⇽</a>

      
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

      {/* Показываем сообщение об успехе, если оно есть */}
      {success && <div className="success-message">{success}</div>}

      {/* Показываем ошибку, если она есть */}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Register;
