import Planet from '../../images/landing-logo.png';
import './Promo.scss';

function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <img src={Planet} alt="Земля" className="promo__picture" />
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__subtitle">Листайте ниже,
                    чтобы узнать больше про этот проект и его создателя.</p>
            </div>
            <button type="button" className="promo__button">Узнать больше</button>
        </section>)
}

export default Promo;