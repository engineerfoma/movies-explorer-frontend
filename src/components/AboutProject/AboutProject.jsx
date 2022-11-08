import "./AboutProject.scss";

function AboutProject() {
    return (
        <section className="section section__about">
            <h2 className="section__title section__about_title">О проекте</h2>
            <div className="section__about_container">
                <p className="section__about_subtitle section__about_subtitle-amount">Дипломный проект
                    включал 5 этапов</p>
                <span className="section__about_body section__about_body-amount">Составление плана, работу над бэкендом,
                    вёрстку, добавление функциональности и финальные
                    доработки.</span>
                <p className="section__about_subtitle section__about_subtitle-duration">На выполнение диплома ушло 5 недель</p>
                <span className="section__about_body section__about_body-duration">У каждого этапа был мягкий и жёсткий
                    дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</span>
            </div>
            <div className="about__plan">
                <p className="about__plan_backend">1 неделя</p>
                <span className="about__plan_backend-text">Back-end</span>
                <p className="about__plan_frontend">4 недели</p>
                <span className="about__plan_frontend-text">Front-end</span>
            </div>
        </section>
    )
}

export default AboutProject;