import style from './Card.module.css';
import { RiShareCircleLine } from "react-icons/ri";

function Card(props:any) {
    const { title, subtitle } = props;

    return (
        <div className={style['featured-left']}>
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
