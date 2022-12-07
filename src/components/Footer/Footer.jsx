import { Route } from 'react-router-dom'
import './Footer.scss'

function Footer() {
    const year = new Date().getFullYear();
    const pathFooter = ['/', '/movies', '/saved-movies'];

    return (
        <>
            <Route exact path={pathFooter}>
                <footer className="footer">
                    <p className="footer__body">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                    <div className="footer__copyright">
                        <span className="footer__copyright_block">© {year}</span>
                        <ul className="footer__copyright_list">
                            <li className="footer__copyright_el">
                                <a href="https://practicum.yandex.ru/" rel="noreferrer" className="footer__copyright_el-link" target="_blank">
                                    Яндекс.Практикум
                                </a>
                            </li>
                            <li className="footer__copyright_el">
                                <a href="https://github.com/" rel="noreferrer" className="footer__copyright_el-link" target="_blank">
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </Route>
        </>
    )
}

export default Footer;