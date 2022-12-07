import "./AboutMe.scss"
import Avatar from '../../images/myPhoto.png'

function AboutMe() {
    return (
        <section className="section section__student">
            <h2 className="section__title section__student_title">Студент</h2>
            <div className="section__student_container">
                <h3 className="section__student_subtitle">Николай</h3>
                <span className="section__student_speciality">Фронтенд-разработчик, 28 лет</span>
                <p className="section__student_description">
                    я уже 10 лет живу в Санкт-Петербурге, закончил СПбГУГА, автоматизированные системы УВД.
                    У меня есть жена и и два сына. Обожаю проводить время с семьёй. Больше года занимаюсь программированием.
                    С 2012 года работаю инженером, близко связан с разработкой ПО.
                    Залетаю в сферу IT с разбега.
                </p>
                <h3 className="section__student_label">Github</h3>
                <img src={Avatar} alt="аватар" className="section__student_avatar" />
            </div>
        </section>
    )
}

export default AboutMe;