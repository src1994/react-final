function NavBar() {
    return (
        <header>
        <div className="logo">NelsonMees</div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <button className="cta-button">Let's talk</button>
    </header>
    );
}

export default NavBar;