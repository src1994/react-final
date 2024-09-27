import styles from  './TtleCard.module.css';
import { GoNorthStar } from "react-icons/go";

function TitleCard() {

    return (
      <div className={styles['title-card-container']}>
        <div className={styles['title-card-star']}><GoNorthStar/></div>
        <div className={styles['title-card-title']}>self-summary</div>
        <div className={styles['title-card-star']}><GoNorthStar/></div>
      </div>
    );
}

export default TitleCard;