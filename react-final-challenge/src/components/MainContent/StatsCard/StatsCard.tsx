import styles from "./StatsCard.module.css"

function StatsCard() {

    return(
        <div className={styles['main-footer-left']}>
                <div className={styles['years']}>
                    <h1 className={styles['stats-numb']}>+07</h1>
                    <h5 className={styles['stats-text']}>years of experience</h5>
                </div>
                <div className={styles['clients']}>
                    <h1 className={styles['stats-numb']}>+07</h1>
                    <h5 className={styles['stats-text']}>clients worldwide</h5>
                </div>
                <div className={styles['total-projects']}>
                    <h1 className={styles['stats-numb']}>+07</h1>
                    <h5 className={styles['stats-text']}>total porjects</h5>
                </div>
        </div>
    )
}

export default StatsCard;