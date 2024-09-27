import styles from "../ProjectCardSmall/ProjectCardSmall.module.css";
import { RiShareCircleLine } from "react-icons/ri";

function ProjectCardSmall () {
    return (
        <div className={styles['featured-left']}>
            <div className={styles['img']}></div>
            <div className={styles['card-text-container']}>
                <div className={styles['card-text-wrapper']}>
                    <h6 className={styles['card-subtitle']}>
                        cenas 
                    </h6>
                    <h1 className={styles['card-title']}>
                        cenas maradas
                    </h1>
                </div>
                <div className={styles['card-icon']}>
                    <RiShareCircleLine />
                </div>
            </div>
        </div>
    )
}

export default ProjectCardSmall;