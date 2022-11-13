import "./AboutMe.scss";
import Avatar from '../../images/avatar.png';

function AboutMe() {
    return (
        <section className="section section__student">
            <h2 className="section__title section__student_title">Студент</h2>
            <div className="section__student_container">
                <h3 className="section__student_subtitle">Виталий</h3>
                <span className="section__student_speciality">Фронтенд-разработчик, 30 лет</span>
                <p className="section__student_description">
                    Я родился и живу в Саратове, закончил факультет экономики СГУ.
                    У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
                    бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                    После того, как прошёл курс по веб-разработке, начал заниматься
                    фриланс-заказами и ушёл с постоянной работы.
                </p>
                <h3 className="section__student_label">Github</h3>
                <img src={Avatar} alt="аватар" className="section__student_avatar" />
            </div>
        </section>
    )
}

export default AboutMe;