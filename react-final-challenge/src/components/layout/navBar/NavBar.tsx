import style from './NavBar.module.css';

function NavBar() {

    console.log(style)

    return (
        <header>
            <div className={style['logo']}>Nelson<span className={style['logo-last-name']}>Mees</span></div>
            <nav className={style['main-menu']}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Works</a></li>
                </ul>
            </nav>
            <button className={style['cta-button']}>Let's talk</button>
    </header>
    );
}

export default NavBar;