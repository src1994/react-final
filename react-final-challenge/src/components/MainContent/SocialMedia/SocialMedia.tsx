import { IoBasketballOutline } from "react-icons/io5";
import { PiTwitterLogo } from "react-icons/pi";
import { RiShareCircleLine } from "react-icons/ri";
import style from "./SocialMedia.module.css";

function SocialMedia () {

    return (
            <div className={style['hero-rigth']}>
            <div className={style['hero-rigth-background']}>
                <div className={style['hero-rigth-background-wrapper']}>
                    <div className={style['icon-container']}>
                        <IoBasketballOutline />
                    </div>
                    <div className={style['icon-container']}>
                        <PiTwitterLogo />
                    </div>
                </div>
            </div>
            <div className={style['hero-rigth-container']}>
                <div className={style['hero-ritgh-wrapper']}>
                    <h6 className={style['card-subtitle']}>stay with me</h6>
                    <h1 className={style['card-title']}>Profiles</h1>
                </div>
                <div className={style['hero-rigth-icon']}>
                    <RiShareCircleLine/>
                </div>
            </div>
            </div>
    )
}

export default SocialMedia;
   