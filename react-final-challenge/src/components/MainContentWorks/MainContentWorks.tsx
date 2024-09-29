import ProjectsCard from "./ProjectsCard/ProjectsCard";
import ProjectCard from "./ProjectCard/ProjectCard";
import TitleCard from "../MainContentAbout/TitleCard/TitleCard";

function MainContentWorks() {

    return (
    <main className="main-container">
        <div className="works">
            <div className="projects-aside">
                <ProjectsCard></ProjectsCard>
                <ProjectCard></ProjectCard>
            </div>
            <div className="projects-rigth">
                <TitleCard
                     Title ="all projects"
                />
                <div className="projects-rigth-container">
                    <ProjectsCard></ProjectsCard>
                    <ProjectsCard></ProjectsCard>
                    <ProjectsCard></ProjectsCard>
                    <ProjectsCard></ProjectsCard>
                </div>
            </div>
        </div>
    </main>
    )
}

export default  MainContentWorks;