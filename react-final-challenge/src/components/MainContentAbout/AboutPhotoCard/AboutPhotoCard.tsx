import styles from "./AboutPhotoCard.module.css"

function  AboutPhotoCard() {
    return (
        <div  className={styles['about-img-card']}>
             <div className={styles['photo-img']}></div>
        </div>
    )
}

export default AboutPhotoCard;