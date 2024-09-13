//import styles  from './styles.module.css';

import MainContent from "../MainContent/MainContent";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";


function MainNav () {
    return(
    <div className="content-container">
        <Header/>
        <MainContent/>
        <Footer/>
    </div>


    )
}

export default MainNav;