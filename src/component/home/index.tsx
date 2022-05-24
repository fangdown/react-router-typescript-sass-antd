import { NavLink } from 'react-router-dom';
import s from './style.scss';

const Home = () => {
    return (
        <div className={s.main}>
            Home
            <div className={s.header}>头部导航</div>
            <NavLink to="/about">about</NavLink>
            <br></br>
            <NavLink to="/antd">antd</NavLink>
        </div>
    );
};

export default Home;
