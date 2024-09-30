import { useState } from 'react';
import style from './Header.module.css';
import  { Link } from 'react-router-dom';


function Header() {

    const [isActive, setIsActive] = useState(false);
    const toggleActiveClass = () => {
        setIsActive(!isActive);
      };

    const removeActive = () => {
        setIsActive(false)
      }

    return (
        <header>
             <Link to="/" className={style.logo}> 
                Nelson<span className={style['logo-last-name']}>Mees</span>
            </Link>
            <nav className={style['main-menu']}>
                <ul className={`${style['nav-menu']} ${isActive ? style.active : ''}`}>
                    <li onClick={removeActive}><Link to="/" className={`${style['nav-link']}`}>Home</Link></li>
                    <li onClick={removeActive}><Link to="/about" className={`${style['nav-link']}`}>About</Link></li>
                    <li onClick={removeActive}><Link to="/works" className={`${style['nav-link']}`}>Works</Link></li>
                </ul>
                <div className={`${style.hamburger} ${isActive ? style.active : ''}`}  onClick={toggleActiveClass}>
                    <span className={`${style.bar}`}></span>
                    <span className={`${style.bar}`}></span>
                    <span className={`${style.bar}`}></span>
                    
                </div>
            </nav>
            <button className={style['cta-button']}>Let's talk</button>
    </header>
    );
}

export default Header;