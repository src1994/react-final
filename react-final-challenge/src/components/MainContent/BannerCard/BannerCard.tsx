import { GoNorthStar } from "react-icons/go";
import styles from "./BannerCard.module.css"

function BannerCard() {

    return(
    <div className={styles['featured-header']}>
        <div className={styles['featured-text']}>latest work and <span>featured</span></div>
        <div className={styles['featured-icon']}><GoNorthStar /></div>
        <div className={styles['featured-text']}>latest work and <span>featured</span></div>
        <div className={styles['featured-icon']}><GoNorthStar /></div>
        <div className={styles['featured-text']}>latest work and </div>
    </div>
    )
}

export default BannerCard;
