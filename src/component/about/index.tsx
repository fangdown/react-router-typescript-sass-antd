import { NavLink } from 'react-router-dom';
import ss from './style.module.less';
console.log('ss', ss);

const About = () => {
    return (
        <div className={ss.about}>
            about
            <br></br>
            <NavLink to="/">home</NavLink>
        </div>
    );
};

export default About;
