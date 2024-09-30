import style from './Header.module.css';
import  { Link } from 'react-router-dom';


function Header() {

    return (
        <header>
            <div className={style['logo']}>Nelson<span className={style['logo-last-name']}>Mees</span></div>
            <nav className={style['main-menu']}>
                <ul>
                    <li><Link to="/" className={style['nav-link']}>Home</Link></li>
                    <li><Link to="/about" className={style['nav-link']}>About</Link></li>
                    <li><Link to="/works" className={style['nav-link']}>Works</Link></li>
                </ul>
            </nav>
            <button className={style['cta-button']}>Let's talk</button>
    </header>
    );
}

export default Header;