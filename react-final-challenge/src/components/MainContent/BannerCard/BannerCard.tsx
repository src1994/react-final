import { GoNorthStar } from "react-icons/go";
import styles from "./BannerCard.module.css"
import { useHoverScale } from "../../../Hooks/HoverScale/useHoverScale";

function BannerCard() {

    const { hoverStyle, handleMouseEnter, handleMouseLeave } = useHoverScale();

    return(
    <div className={styles['featured-header']}
    style={hoverStyle}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
        <div className={styles['featured-text']}>latest work and <span>featured</span></div>
        <div className={styles['featured-icon']}><GoNorthStar /></div>
        <div className={styles['featured-text']}>latest work and <span>featured</span></div>
        <div className={styles['featured-icon']}><GoNorthStar /></div>
        <div className={styles['featured-text']}>latest work and </div>
    </div>
    )
}

export default BannerCard;
