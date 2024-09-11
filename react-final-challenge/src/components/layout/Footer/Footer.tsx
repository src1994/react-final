import style from './Footer.module.css';

function Footer() {

    console.log(style)

    return (
        <footer>
            <div className={style['footer-container']}>
                <div className={style['logo-footer']}>Nelson<span className={style['logo-last-name']}>Mees</span></div>
                <div className={style['footer-nav']}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Works</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className={style['copyrigth']}>
                    <p className={style['copyrigth-text']}>© All rights reserved by <a href="#alterar">Sérgio Sousa</a></p> 
                </div>
            </div>
        </footer>
    );
}

export default Footer;