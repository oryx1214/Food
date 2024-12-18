import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

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
                setSuccessMessage('Вход выполнен успешно!');
                setErrorMessage('');
                setTimeout(() => {
                    window.location.href = '/categories';
                }, 1500);
            } else {
                setSuccessMessage('');
                setErrorMessage(data.message || 'Неверное имя пользователя или пароль');
            }
        } catch (error) {
            setSuccessMessage('');
            setErrorMessage('Не удалось подключиться к серверу');
        }
    };

    return (
        <div className="main">
    <div className="top"></div>
    <div className="bottom"></div>
    <div className="login-container">
        <a href="/" className="back-button" aria-label="Вернуться на главную">
            ←
        </a>
        <h2>Вход</h2>
        {successMessage && <p className="success">{successMessage}</p>}
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
</div>
    );
};

export default Login;
