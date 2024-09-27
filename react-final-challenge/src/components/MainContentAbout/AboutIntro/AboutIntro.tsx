import style from "./AboutIntro.module.css"

function AboutIntro() {

    return(
        <div className={style['about-presentation']}>
            <div className={style['text-container']}>
                <h1 className={style['title']}>David Anderson</h1>
                <p className={style['text']}>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries</p>
            </div>
        </div>
    )
}

export default AboutIntro;