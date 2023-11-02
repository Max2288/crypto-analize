import { useState, FormEvent } from "react"
import { Link } from 'react-router-dom';
import './LoginPage.css';
import { fetchJsonData, fetchEncodedData } from "actions/utils/post";

interface LoginPageProps {
    mode: string;
}

interface RegData {
    surname: string;
    name: string;
    email: string;
    password: string;
}

interface AuthData {
    username: string;
    password: string;
}


export default function LoginPage(props: LoginPageProps) {
    const [authMode, setAuthMode] = useState(props.mode);

    const [authData, setAuthData] = useState<AuthData>(
        {
            username: "",
            password: ""
        }
    );

    const [regData, setRegData] = useState<RegData>(
        {
            surname: '',
            name: '',
            email: '',
            password: '',
        }
    );

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    };

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
                const jsonData = await fetchJsonData(apiUrl, "POST", requestData, headers);
            } catch (error) {
                console.error("Ошибка:", error);
            }
        }
        fetchData();
    };

    const authBackend = (data: AuthData) => {
        console.log(data);
        const fetchData = async () => {
            const apiUrl = "https://seagulltech.ru/auth/jwt/login"
            const headers = {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            }
            try {
                const headersData = await fetchEncodedData(apiUrl, "POST", data, headers);
                console.log(headersData)
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
    const handleSubmitAuth = (event: FormEvent) => {
        event.preventDefault();
        authBackend(authData);
    }

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleSubmitAuth}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Вход</h3>
                        <div className="text-center">
                            Ещё не зарегистрированы?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                Регистрация
                            </span>
                        </div>
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
                            Забыли <Link to="/forgot">пароль?</Link>
                        </p>
                    </div>
                </form>
            </div>
        )
    };

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Регистрация</h3>
                    <div className="text-center">
                        Уже зарегистрированы?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Вход
                        </span>
                    </div>
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
                </div>
            </form>
        </div>
    );
};