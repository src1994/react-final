import style from "./ProjectsCard.module.css"
import { RiShareCircleLine } from "react-icons/ri";


function ProjectsCard () {

    return(
        <div className={style['project-card']}>
            <div className={style['project-card-image']}></div>
            <div className={style['project-card-footer']}>
                <div className={style['titles']}>
                 
                </div>
                <div className={style['card-icon']}>
                    <RiShareCircleLine />
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard;