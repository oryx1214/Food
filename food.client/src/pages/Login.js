import React, { useState } from 'react';
import './Login.css'; // Импортируем стили

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Примерная логика для проверки входа
        if (username === 'user' && password === 'password') {
            console.log('Успешный вход!');
            // Здесь можно перенаправить на другую страницу
            // Например, используя history.push('/dashboard');
        } else {
            setErrorMessage('Неверное имя пользователя или пароль');
        }
    };

    return (
        <div className="login-container">
            <h2>Вход</h2>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Имя пользователя:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className = "button " type="submit">Вход</button>
            </form>
        </div>
    );
};

export default Login;
