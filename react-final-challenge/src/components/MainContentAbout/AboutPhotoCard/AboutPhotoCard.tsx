import styles from "./AboutPhotoCard.module.css"
import { useHoverScale } from "../../../Hooks/HoverScale/useHoverScale";

function  AboutPhotoCard(props:any) {

    const {imageSrc} = props;
    

    const { hoverStyle, handleMouseEnter, handleMouseLeave } = useHoverScale();

    return (
        <div  className={styles['about-img-card']}
            style={hoverStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
             <div className={styles['photo-img']}>
                <img src={imageSrc} alt="photo"/>
             </div>
        </div>
    )
}

export default AboutPhotoCard;