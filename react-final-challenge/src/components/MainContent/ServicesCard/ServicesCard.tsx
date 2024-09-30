import { FiCamera } from "react-icons/fi";
import { PiPencilCircle } from "react-icons/pi";
import { PiCirclesThree } from "react-icons/pi";
import { BsFileCode } from "react-icons/bs";
import { RiShareCircleLine } from "react-icons/ri";
import styles from "./ServicesCard.module.css"
import { useHoverScale } from "../../../Hooks/HoverScale/useHoverScale";


function ServiceCard () {

    const { hoverStyle, handleMouseEnter, handleMouseLeave } = useHoverScale();

    return (
        <div className={styles['main-center']}
            style={hoverStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className={styles['main-center-icons']}>
                <div className={styles['main-center-icon']}>
                    <FiCamera />
                </div>
                <div className={styles['main-center-icon']}>
                    <PiPencilCircle />
                </div>
                <div className={styles['main-center-icon']}>
                    <PiCirclesThree />
                </div>
                <div className={styles['main-center-icon']}>
                    <BsFileCode />
                </div>
            </div>
            <div className={styles['main-center-tiltes']}>
                <div className={styles['main-center-titles']}>
                    <h6 className={styles['card-subtitle']}>specialization</h6>
                    <h1 className={styles['card-title']}>Services Offering</h1>
                </div>
                <div className={styles['main-center-wrapper']}>
                    <div className={styles['main-center-titles-icon']}>
                        <RiShareCircleLine/>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default ServiceCard;