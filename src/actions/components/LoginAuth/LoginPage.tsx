
import { useState } from "react"
import './LoginPage.css';

interface LoginPageProps {
    mode: string;
  }

export default function LoginPage(props: LoginPageProps) {
    let [authMode, setAuthMode] = useState(props.mode)

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
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
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Пароль</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Введите почту"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Войти
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Забыли <a href="/forgot">пароль?</a>
                        </p>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Регистрация</h3>
                    <div className="text-center">
                        Уже зарегистрированы?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Вход
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Имя Фамилия</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Иван Иванов"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Почта</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Введите почту"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Пароль</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Введите пароль"
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
    )
}