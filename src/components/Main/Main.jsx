import { useRef } from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function Main() {

    const aboutRef = useRef(null);

    const scroll = () => aboutRef.current.scrollIntoView({ behavior: 'smooth' });

    return (
        <main>
            <Promo
                scroll={scroll}
            />
            <AboutProject
                aboutRef={aboutRef}
            />
            <Techs />
            <AboutMe />
            <Portfolio />
        </main>
    )
}

export default Main;