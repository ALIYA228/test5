import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from './features/userSlice';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.registeredUsers);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password || !confirmPassword) {
      setError('Все поля должны быть заполнены!');
      return;
    }

    if (password !== confirmPassword) {
      setError('Пароли не совпадают!');
      return;
    }

    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      setError('Пользователь уже существует!');
      return;
    }

    dispatch(registerUser({ username, password }));

    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
      <form onSubmit={handleSubmit}>
        <h2>Регистрация</h2>
        <input
            type="text"
            placeholder="Имя пользователя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <input
            type="password"
            placeholder="Повторите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Зарегистрироваться</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
  );
};

export default RegistrationForm;
