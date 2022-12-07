import Arrow from '../../images/arrow.svg'
import "./Portfolio.scss"

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <nav className="portfolio__links">
                <ul className="portfolio__links_list">
                    <li className="porfolio__links_el">
                        <a href="https://github.com/engineerfoma/how-to-learn.git" rel="noreferrer" className="portfolio__link" target="_blank">
                            Статичный сайт
                            <img src={Arrow} alt="ссылка" className="portfolio__link_arrow" />
                        </a>
                    </li>
                    <li className="porfolio__links_el">
                        <a href="https://github.com/engineerfoma/russian-travel.git" rel="noreferrer" className="portfolio__link" target="_blank">
                            Адаптивный сайт
                            <img src={Arrow} alt="ссылка" className="portfolio__link_arrow" />
                        </a>
                    </li>
                    <li className="porfolio__links_el">
                        <a href="https://github.com/engineerfoma/react-mesto-api-full.git" rel="noreferrer" className="portfolio__link portfolio__link-last" target="_blank">
                            Одностраничное приложение
                            <img src={Arrow} alt="ссылка" className="portfolio__link_arrow" />
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Portfolio;