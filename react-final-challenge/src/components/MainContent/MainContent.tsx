import Card from "./Card/Card";
import SocialMedia from  "./SocialMedia/SocialMedia";
import Intro from "./Intro/Intro";
import ServicesCard from "./ServicesCard/ServicesCard";
import StatsCard from "./StatsCard/StatsCard";
import ContactCard from "./ContactCard/ContactCard";
import BannerCard from "./BannerCard/BannerCard";


function MainContent () {
    return(
        <main className="main-container">
        <section className="main-header">
            <Intro/>
            <div className="featured">
                <BannerCard/>
                <div className="featured-left-rigth-container">
                    <Card 
                       title="more about me"
                       subtitle="Credentials"
                    />
                    <Card
                        title="showcase"
                        subtitle="Projects"
                    />
                </div>
            </div>
        </section>
        <section className="main-hero">
            <Card
                title="blog"
                subtitle="GFonts"
            />
            <ServicesCard/>
            <div className="main-rigth">
                <SocialMedia/>
            </div>  
        </section>
        <section className="main-footer">
            <StatsCard/>
            <ContactCard/>
        </section>


    </main>
    );
}

export default MainContent;