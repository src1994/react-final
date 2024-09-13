import style from './Footer.module.css';

function Footer() {

    return (
        <footer>
            <div className="footer-container">
                <div className="logo-footer">Nelson<span className="logo-last-name">Mees</span></div>
                <div className="footer-nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Works</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="copyrigth">
                    <p className="copyrigth-text">© All rights reserved by <a href="#alterar">Sérgio Sousa</a></p> 
                </div>
            </div>
        </footer>
    );
}

export default Footer;