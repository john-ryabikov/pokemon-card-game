import "./Button.scss"
import button_push_SFX from "/sounds/sfx/button_push.wav"

interface Props {
    children: React.ReactNode,
    subClass: string,
    unClick?: boolean,
    actionFn: () => void
}

const sound_eff = new Audio(button_push_SFX)

const buttonPush = () => {
    sound_eff.play()
}

export default function Button({children, subClass, actionFn, unClick}: Props) {
  return (
    <button
        className={`game-button ${subClass ? `game-button_${subClass}` : ""}`}
        onClick={()=> {
            buttonPush()
            actionFn()
        }}
        disabled={unClick && true}
    >   
      {children}
    </button>
  )
}
