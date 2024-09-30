import style from "./AboutExperience.module.css"
import { useHoverScale } from "../../../Hooks/HoverScale/useHoverScale";

function AboutExperience (props: any) {

    const { hoverStyle, handleMouseEnter, handleMouseLeave } = useHoverScale();
    const { HeaderTitle, YearTextHero, TitleTextHero, TextHero, YearTextFooter, TitleTextFooter, TextFooter} = props;

    return(
        <div className={style['experience']}
        style={hoverStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="experience-container">
                <div className={style['text-container']}>
                    <div className={style['text-header']}>
                        <h1 className={`${style['header-title']}`}>{HeaderTitle}</h1>
                    </div>
                    <div className={style['text-hero']}>
                        <h5 className={style['year-text']}>{YearTextHero}</h5>
                        <h1 className={style['title-text']}>{TitleTextHero}</h1>
                        <p className={style['text']}>{TextHero}</p>
                    </div>
                    <div className={style['text-footer']}>
                        <h5 className={style['year-text']}>{YearTextFooter}</h5>
                        <h1 className={style['title-text']}>{TitleTextFooter}</h1>
                        <p className={style['text']}>{ TextFooter}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutExperience;