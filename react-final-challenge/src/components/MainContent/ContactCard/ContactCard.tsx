import { RiShareCircleLine } from "react-icons/ri";
import styles from "./ContactCard.module.css"
import { useHoverScale } from "../../../Hooks/HoverScale/useHoverScale";

function ContactCard() {

    const { hoverStyle, handleMouseEnter, handleMouseLeave } = useHoverScale();

    return(
        <div className={styles['main-footer-rigth']}
        style={hoverStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
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