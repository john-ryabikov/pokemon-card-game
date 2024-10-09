import "./Button.scss"
import button_push_SFX from "/sounds/sfx/button_push.wav"

interface Props {
    children: React.ReactNode,
    subClass?: string,
    unClick?: boolean,
    actionFn: () => void
}

export default function Button({children, subClass, actionFn, unClick}: Props) {
  
  const buttonPush = () => {
    const sound_eff = new Audio(button_push_SFX)
    sound_eff.play()
  }

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
