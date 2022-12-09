import { Link, useHistory } from 'react-router-dom'
import './NotFoundPage.scss'

function NotFound() {
    const history = useHistory();
    const buttonClick = () => {
        history.goBack();
    }
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
            <button className="not-found__button not-found__link" onClick={buttonClick}>
                Назад
            </button>
        </main>
    )
}

export default NotFound;