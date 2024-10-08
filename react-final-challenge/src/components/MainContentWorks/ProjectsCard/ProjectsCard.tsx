import style from "./ProjectsCard.module.css"
import { RiShareCircleLine } from "react-icons/ri";
import { useHoverScale } from "../../../Hooks/HoverScale/useHoverScale";

function ProjectsCard (props:any) {

    const { hoverStyle, handleMouseEnter, handleMouseLeave } = useHoverScale();

    const {title, subtitle} = props;

    return(
        <div className={style['project-card']}
            style={hoverStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className={style['project-card-image']}>
                <img src="./images/eftakher-alam-i1VQZsU86ok-unsplash.jpg" alt="photo"/>
            </div>
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

export default ProjectsCard;