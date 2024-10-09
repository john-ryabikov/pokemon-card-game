import "./Button.scss"
import button_push_SFX from "/sounds/sfx/button_push.wav"
import upgrade_SFX from "/sounds/sfx/upgrade.mp3"

interface Props {
    children: React.ReactNode,
    subClass?: string,
    unClick?: boolean,
    actionFn: () => void
}

export default function Button({children, subClass, actionFn, unClick}: Props) {
  
  const buttonPush = () => {
    const sound_eff = new Audio()
    sound_eff.src = subClass === "up" ? upgrade_SFX : button_push_SFX
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
