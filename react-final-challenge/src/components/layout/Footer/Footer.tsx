import style from './Footer.module.css';
import  { Link } from 'react-router-dom';
import { SunMoon } from '../../SunMoon/SunMoon';
import {Switch} from '../../Switch/Switch'

function Footer() {

    return (
        <footer>
            <div className={style['footer-container']}>
                <div className={style['logo-footer']}>Nelson<span className={style['logo-last-name']}>Mees</span></div>
                <div className={style['footer-nav']}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/works">works</Link></li>
                    </ul>
                </div>
                <div className={style['box-dark-ligth-mode']}> 
                    <SunMoon/>
                    <Switch/>
                </div>
                <div className={style['copyrigth']}>
                    <p className={style['copyrigth-text']}>© All rights reserved by <a href="#">Sérgio Sousa</a></p> 
                </div>
            </div>
        </footer>
    );
}

export default Footer;