import { RiShareCircleLine } from "react-icons/ri";
import style from "./Intro.module.css"

function Intro() {

    return(
        <div className={style['intro']}>
                <div className={style['photo']}></div> 
                <div className={style['intro-text']}>
                    <h6>a web developer</h6>
                    <h1>Nelson Fernandes.</h1>
                    <p>I am a web developer based in Porto Portugal</p>
                    <div className={style['intro-icon']}>
                        <RiShareCircleLine/>
                    </div>
                </div>   
            </div>
    )
}

export default Intro;