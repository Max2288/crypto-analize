import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { projects } from 'data/index'
import { Link } from 'react-router-dom';
import './SinglePage.css';

function SinglePage() {
    const [expandedProject, setExpandedProject] = useState({});
    return (
        <div>
            <Container fluid className="bg-dark text-light text-center py-5">
                <div className="container">
                    <h1 className="display-4 mb-4">Добро пожаловать на наш сайт</h1>
                    <p className="lead">
                        Здесь мы специализируемся в области аналитики данных и предоставляем качественные аналитические решения для вашего бизнеса.
                    </p>
                </div>
            </Container>
            <Container fluid className="bg-light text-dark py-5">
                <Container className="my-5">
                    <h2 className="text-center mb-4">О нас</h2>
                    <p className="lead text-center">
                        Мы - команда профессиональных аналитиков данных, готовых предоставить вам качественные аналитические решения для вашего бизнеса.
                    </p>
                </Container>
            </Container>
            <Container fluid className="bg-dark text-light text-center py-5">
                <Container className="my-5">
                    <h2 className="text-center mb-4">Наши услуги</h2>
                    <ul className="list-unstyled">
                        <li className="mb-2">Анализ данных и статистика</li>
                        <li className="mb-2">Визуализация данных</li>
                        <li className="mb-2">Прогнозирование и машинное обучение</li>
                    </ul>
                </Container>
            </Container>
            <Container className="my-5">
                <h2 className="text-center mb-4">Наши проекты</h2>
                <div className="row">
                    {projects.map((project) => (
                        <div className="col-md-4" key={project.id}>
                            <Card
                                onClick={() => setExpandedProject(project.id)}
                                className={`mb-4 ${expandedProject === project.id ? 'border-primary' : ''}`}
                            >
                                <Card.Img variant="top" src={project.image} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container>
            <Container className="mt-4">
                <h2 className="text-center mb-4">Видео о нашей работе</h2>
                <iframe
                    title="Видео о нашей работе"
                    width="100%"
                    height="515"
                    src="https://www.youtube.com/embed/xfWRD0YGDiM?autoplay=1&mute=1"
                    allowFullScreen
                ></iframe>
                <Container fluid className="text-center py-5">
                    <Link to="/contacts">
                        <button className=" mt-4 btn-black btn-square">Свяжитесь с нами</button>
                    </Link>
                </Container>
            </Container>
        </div>
    );
}

export default SinglePage;
