import { RiShareCircleLine } from "react-icons/ri";
import style from "./Intro.module.css";
import { useHoverScale } from "../../../Hooks/HoverScale/useHoverScale";

function Intro() {
    const { hoverStyle, handleMouseEnter, handleMouseLeave } = useHoverScale();

    return (
        <div className={style['intro']} 
            style={hoverStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className={style['photo']}>
                <img src="./images/history-in-hd-rHIiT1Q6GIg-unsplash.jpg" alt="photo" />
            </div>
            <div className={style['intro-text']}>
                <div className={style['intro-text-container']}>
                    <h6>a web developer</h6>
                    <h1>Nelson Fernandes.</h1>
                    <p>I am a web developer based in Porto Portugal</p>
                    <div
                        className={style['intro-icon']}>
                        <RiShareCircleLine />
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default Intro;
