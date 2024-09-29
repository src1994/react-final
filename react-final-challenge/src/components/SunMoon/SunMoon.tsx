import { Player } from "@lottiefiles/react-lottie-player"

export const SunMoon = () => {
    return (
          <span className="letter-special">
            <Player
                autoplay
                loop
                src='https://assets1.lottiefiles.com/packages/lf20_gjedw3tk.json'
                className='lottifile'
            />
        </span >
    )
}