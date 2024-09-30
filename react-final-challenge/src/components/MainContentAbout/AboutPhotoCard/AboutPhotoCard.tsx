import styles from "./AboutPhotoCard.module.css"
import { useHoverScale } from "../../../Hooks/HoverScale/useHoverScale";

function  AboutPhotoCard() {

    const { hoverStyle, handleMouseEnter, handleMouseLeave } = useHoverScale();

    return (
        <div  className={styles['about-img-card']}
            style={hoverStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
             <div className={styles['photo-img']}></div>
        </div>
    )
}

export default AboutPhotoCard;