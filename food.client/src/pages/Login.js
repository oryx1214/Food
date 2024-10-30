import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    console.log(process.env.REACT_APP_API_URL);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/Auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();

            if (response.ok) {
                console.log('Успешный вход:', data);
                // Перенаправление на другую страницу при успешном входе
                window.location.href = '/categories';
            } else {
                setErrorMessage(data.message || 'Неверное имя пользователя или пароль');
            }
        } catch (error) {
            console.error('Ошибка запроса:', error);
            setErrorMessage('Не удалось подключиться к серверу');
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
                <button className="button" type="submit">Вход</button>
            </form>
        </div>
    );
};

export default Login;
