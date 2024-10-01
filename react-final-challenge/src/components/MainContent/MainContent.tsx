import Card from "./Card/Card";
import SocialMedia from  "./SocialMedia/SocialMedia";
import Intro from "./Intro/Intro";
import ServicesCard from "./ServicesCard/ServicesCard";
import StatsCard from "./StatsCard/StatsCard";
import ContactCard from "./ContactCard/ContactCard";
import BannerCard from "./BannerCard/BannerCard";


function MainContent () {
    const imageUrl  = "./images/florian-klauer-mk7D-4UCfmg-unsplash.jpg";
    const imageUrlCredencials ="./images/vasily-koloda-8CqDvPuo_kI-unsplash.jpg"
    const imageUrlProjects ="./images/firmbee-com-ir5lIkVFqC4-unsplash.jpg"


    return(
    <main className="main-container">
        <section className="main-header">
            <Intro/>
            <div className="featured">
                <BannerCard/>
                <div className="featured-left-rigth-container">
                    <Card 
                        imageSrc={imageUrlCredencials}
                       title="more about me"
                       subtitle="Credentials"
                    />
                    <Card
                       imageSrc={imageUrlProjects}
                        title="showcase"
                        subtitle="Projects"
                    />
                </div>
            </div>
        </section>
        <section className="main-hero">
            <Card
                imageSrc ={imageUrl}
                title="blog"
                subtitle="GFonts"
            />
            <ServicesCard/>
            
            <SocialMedia/>
            
        </section>
        <section className="main-footer">
            <StatsCard/>
            <ContactCard/>
        </section>


    </main>
    );
}

export default MainContent;