import { RiShareCircleLine } from "react-icons/ri";
import { GoNorthStar } from "react-icons/go";
import { CiCamera } from "react-icons/ci";
import { PiPencilCircle } from "react-icons/pi";
import { PiCirclesThree } from "react-icons/pi";
import { BsFileCode } from "react-icons/bs";

function MainContent () {
    return(
        <main className="main-container">
        <section className="main-header">
            <div className="intro">
                <div className="photo"></div> 
                <div className="intro-text">
                    <h6>a web developer</h6>
                    <h1>Nelson Fernandes.</h1>
                    <p>I am a web developer based in Porto Portugal</p>
                    <div className="intro-icon">
                        <RiShareCircleLine/>
                    </div>
                </div>   
            </div>
            <div className="featured">
                <div className="featured-header">
                    <div className="featured-text">latest work and <span>featured</span></div>
                    <div className="featured-icon"><GoNorthStar /></div>
                    <div className="featured-text">latest work and <span>featured</span></div>
                    <div className="featured-icon"><GoNorthStar /></div>
                    <div className="featured-text">latest work and </div>
                </div>
                <div className="featured-left-rigth-container">
                    <div className="featured-left">
                        <div className="img"></div>
                        <div className="card-text-container">
                            <div className="card-text-wrapper">
                                <h6 className="card-subtitle">blog</h6>
                                <h1 className="card-title">GFonts</h1>
                            </div>
                            <div className="card-icon">
                                <RiShareCircleLine/>
                            </div>
                        </div>
                    </div>
                    <div className="featured-rigth">
                        <div className="img"></div>
                        <h6 className="card-subtitle">blog</h6>
                        <h1 className="card-title">GFonts</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className="main-hero">
            <div className="main-left">
                <div className="hero-left">
                    <div className="img"></div>
                    <h6 className="card-subtitle">blog</h6>
                    <h1 className="card-title">GFonts</h1>
                </div>
            </div>
            <div className="main-center">
                <div className="main-center-icons">
                    <div className="main-center-icon">
                        <CiCamera />
                    </div>
                    <div className="main-center-icon">
                        <PiPencilCircle />
                    </div>
                    <div className="main-center-icon">
                        <PiCirclesThree />
                    </div>
                    <div className="main-center-icon">
                        <BsFileCode />
                    </div>
                </div>
                <h6 className="card-subtitle">specialization</h6>
                <h1 className="card-title">Services Offering</h1>
            </div>
            <div className="main-rigth">
                <div className="hero-rigth">
                    <div className="hero-rigth-background">
                        <div className="icon"></div>
                        <div className="icon"></div>
                    </div>

                    <h6 className="card-subtitle">stay with me</h6>
                    <h1 className="card-title">Profiles</h1>
                </div>
            </div>  
        </section>
        <section className="main-footer">
            <div className="main-footer-left">
                <div className="years">
                    <h1 className="stats-numb">+07</h1>
                    <h5 className="stats-text">years of experience</h5>
                </div>
                <div className="clients">
                    <h1 className="stats-numb">+07</h1>
                    <h5 className="stats-text">clients worldwide</h5>
                </div>
                <div className="total-projects">
                    <h1 className="stats-numb">+07</h1>
                    <h5 className="stats-text">total porjects</h5>
                </div>
            </div>
            <div className="main-footer-rigth">
                <div className="main-footer-rigth-container">
                    <div className="star-icon"></div>
                    <h1>Lets <br/> work <span>together.</span></h1>
                </div>
            </div>
        </section>
    </main>
    );
}

export default MainContent;