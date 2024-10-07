import "./Button.scss"

interface Props {
    children: React.ReactNode,
    subClass?: string,
    actionFn: () => void
}

const buttonPush = () => {
    const sound_eff = new Audio('sounds/sfx/button_push.wav')
    sound_eff.play()
}

export default function Button({children, subClass, actionFn}: Props) {
  return (
    <button
        className={`game-button ${subClass ? `game-button_${subClass}` : ""}`}
        onClick={()=> {
            buttonPush()
            actionFn()
        }}
    >   
      {children}
    </button>
  )
}
