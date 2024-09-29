import { RiShareCircleLine } from "react-icons/ri";
import styles from "./ContactCard.module.css"

function ContactCard() {

    return(
        <div className={styles['main-footer-rigth']}>
            <div className={styles['main-footer-rigth-container']}>
                <h1>Lets <br/> work <span>together.</span></h1>
                <div className={styles['star-icon']}>
                    <RiShareCircleLine/>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;