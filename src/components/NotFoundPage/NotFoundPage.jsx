import { Link } from 'react-router-dom'
import './NotFoundPage.scss'

function NotFound() {
    return (
        <main className="not-found">
            <div className="not-found__container">
                <h1 className="not-found__title">
                    404
                </h1>
                <p className="not-found__subtitle">
                    Страница не найдена
                </p>
            </div>
            <button className="not-found__button">
                <Link to="/" className="not-found__link">Назад</Link>
            </button>
        </main>
    )
}

export default NotFound;