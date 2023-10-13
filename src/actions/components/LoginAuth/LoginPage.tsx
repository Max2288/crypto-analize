import { useState, FormEvent } from "react"
import './LoginPage.css';

interface LoginPageProps {
    mode: string;
}

interface FormData {
    surname: string;
    name: string;
    email: string;
    password: string;
}

export default function LoginPage(props: LoginPageProps) {
    let [authMode, setAuthMode] = useState(props.mode);

    const [formData, setFormData] = useState<FormData>({
        surname: '',
        name: '',
        email: '',
        password: '',
    });

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    };

    const regBackend = (data: FormData) => {
        console.log(data);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        regBackend(formData);
    };

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleSubmit}>
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
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required={true}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Пароль</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Введите почту"
                                name="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required={true}
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
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                            value={formData.surname}
                            onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
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
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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