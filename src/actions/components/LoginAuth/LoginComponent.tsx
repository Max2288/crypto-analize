import React, { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchEncodedData } from 'actions/utils/post';
import './LoginPage.css';

interface AuthData {
  username: string;
  password: string;
}

const LoginComponent: React.FC = () => {
  const navigate = useNavigate();
  const [authData, setAuthData] = useState<AuthData>({
    username: '',
    password: '',
  });

  const authBackend = async (data: AuthData) => {
    const apiUrl = 'https://seagulltech.ru/auth/jwt/login';
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    };

    try {
      await fetchEncodedData(apiUrl, 'POST', data, headers);
      navigate('/charts');
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const handleSubmitAuth = (event: FormEvent) => {
    event.preventDefault();
    authBackend(authData);
  };

  return (
    <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmitAuth}>
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">Вход</h3>
                <div className="form-group mt-3">
                    <label>Почта</label>
                    <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Ivan@yandex.ru"
                        name="email"
                        value={authData.username}
                        onChange={(e) => setAuthData({ ...authData, username: e.target.value })}
                        required={true}
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Пароль</label>
                    <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Введите пароль"
                        name="password"
                        value={authData.password}
                        onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
                        required={true}
                    />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                        Войти
                    </button>
                </div>
                <p className="text-center mt-2">
                    У вас ещё нет аккаунта?<Link to="/register">Зарегистрироваться</Link>
                </p>
            </div>
        </form>
    </div>
  );
};

export default LoginComponent;