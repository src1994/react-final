import style from './Card.module.css';
import { RiShareCircleLine } from "react-icons/ri";
import { useHoverScale } from "../../../Hooks/HoverScale/useHoverScale";

function Card(props:any) {
    const { title, subtitle } = props;

    const { hoverStyle, handleMouseEnter, handleMouseLeave } = useHoverScale();


    return (
        <div className={style['featured-left']}
            style={hoverStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className={style['img']}></div>
            <div className={style['card-text-container']}>
                <div className={style['card-text-wrapper']}>
                    <h6 className={`${style['card-subtitle']} ${style[subtitle]}`}>{title}</h6>
                    <h1 className={`${style['card-title']} ${style[subtitle]}`}>{subtitle}</h1>
                </div>
                <div className={style['card-icon']}>
                    <RiShareCircleLine />
                </div>
            </div>
        </div>
    );
}

export default Card;
