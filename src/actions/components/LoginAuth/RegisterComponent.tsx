import React, { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchJsonData } from 'actions/utils/post';
import './LoginPage.css';

interface RegData {
  surname: string;
  name: string;
  email: string;
  password: string;
}

const RegisterComponent: React.FC = () => {
  const navigate = useNavigate();
  const [regData, setRegData] = useState<RegData>({
    surname: '',
    name: '',
    email: '',
    password: '',
  });

  const regBackend = (data: RegData) => {
    console.log(data);
    const fetchData = async () => {
        const apiUrl = "https://seagulltech.ru/auth/register"
        const requestData = {
            ...data,
            "is_active": true,
            "is_superuser": false,
            "is_verified": false,
            "ozon_client_id": 0,
            "ozon_api_key": "string"
        }
        const headers = {
            "Content-Type": "application/json",
            "accept": "application/json"
        }
        try {
            await fetchJsonData(apiUrl, "POST", requestData, headers);
            navigate('/login');
        } catch (error) {
            console.error("Ошибка:", error);
        }
    }
    fetchData();
    };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    regBackend(regData);
  };

  return (
    <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Регистрация</h3>
                    <div className="form-group mt-3">
                        <label>Имя</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Иван"
                            name="name"
                            value={regData.name}
                            onChange={(e) => setRegData({ ...regData, name: e.target.value })}
                            required={true}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Фамилия</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Иванов"
                            name="surname"
                            value={regData.surname}
                            onChange={(e) => setRegData({ ...regData, surname: e.target.value })}
                            required={true}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Почта</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Введите почту"
                            name="email"
                            value={regData.email}
                            onChange={(e) => setRegData({ ...regData, email: e.target.value })}
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
                            value={regData.password}
                            onChange={(e) => setRegData({ ...regData, password: e.target.value })}
                            required={true}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Зарегистрироваться
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        У вас уже есть аккаунт? <Link to="/login">Войти</Link>
                    </p>
                </div>
            </form>
        </div>
  );
};

export default RegisterComponent;