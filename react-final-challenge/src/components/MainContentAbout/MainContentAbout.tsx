import AboutPhotoCard from "./AboutPhotoCard/AboutPhotoCard";
import TitleCard from "./TitleCard/TitleCard";
import AboutIntro from "./AboutIntro/AboutIntro";
import AboutExperience from "./AboutExperience/AboutExperience";

import SocialMedia from  "../MainContent/SocialMedia/SocialMedia";
import ContactCard from "../MainContent/ContactCard/ContactCard";
import Card from "../MainContent/Card/Card"

function MainContentAbout() {

    const imageUrl  = "./images/history-in-hd-rHIiT1Q6GIg-unsplash.jpg";
    const imageUrlCredencials ="./images/vasily-koloda-8CqDvPuo_kI-unsplash.jpg"

    return (
    <main className="main-container">
        <section className="main-header">
            <div className="summary-left">
                <AboutPhotoCard
                imageSrc={imageUrl}
                />
            </div>
            <div className="summary-rigth">
                <TitleCard
                    Title ="self-summary"
                />
                <AboutIntro/>
            </div>
        </section>
        <section className="main-hero">
           <AboutExperience
                HeaderTitle="experience"
                YearTextHero ="2007 - 2017" 
                TitleTextHero="Framer Designer & Developer" 
                TextHero="Bluebase Designs"
                YearTextFooter="2017 - 2023" 
                TitleTextFooter="Front-End Developer" 
                TextFooter="Larsen & Toubro"
           />
           <AboutExperience
                HeaderTitle="education"
                YearTextHero ="2004 - 2007" 
                TitleTextHero="Bachelor Degree in Psychology" 
                TextHero="University of California"
                YearTextFooter="2007 - 2009" 
                TitleTextFooter="Master Degree in Designing " 
                TextFooter="University of Texas"
           />
           
           
        </section>
        <section className="main-footer">
           <SocialMedia/>
           <ContactCard/>
           <Card 
                imageSrc = {imageUrlCredencials}
                title="more about me"
                subtitle="Credentials"
             />
        </section>
    </main>
    )
}

export default  MainContentAbout;