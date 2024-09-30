import style from "./ProjectCard.module.css"
import { RiShareCircleLine } from "react-icons/ri";


function ProjectCard (props:any) {
    const {title, subtitle} = props;

    return(
        <div className={style['project-card']}>
            <div className={style['project-card-image']}></div>
            <div className={style['project-card-footer']}>
                <div className={style['titles']}>
                    <h6 className={`${style['card-subtitle']} ${style[subtitle]}`}>{title}</h6>
                    <h1 className={`${style['card-title']} ${style[subtitle]}`}>{subtitle}</h1>
                </div>
                <div className={style['card-icon']}>
                    <RiShareCircleLine />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;