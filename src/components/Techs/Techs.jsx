import "./Techs.scss"

function Techs() {
    return (
        <section className="section section__techs">
            <h2 className="section__title section__techs_title">Технологии</h2>
            <h3 className="section__techs_subtitle">7 Технологий</h3>
            <p className="section__techs_body">На курсе веб-разработки
                мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="section__techs_list">
                <li className="section__techs_el">HTML</li>
                <li className="section__techs_el">CSS</li>
                <li className="section__techs_el">JS</li>
                <li className="section__techs_el">React</li>
                <li className="section__techs_el">Git</li>
                <li className="section__techs_el">Express</li>
                <li className="section__techs_el">mongoDB</li>
            </ul>
        </section>
    )
}

export default Techs;