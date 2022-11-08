import './Footer.scss';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer__body">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__copyright">
                <span className="footer__copyright_block">© {year}</span>
                <ul className="footer__copyright_list">
                    <li className="footer__copyright_el">Яндекс.Практикум</li>
                    <li className="footer__copyright_el">Github</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;