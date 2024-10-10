import { onButtonPush } from "@/actions-game/game.play-sounds"

import "./Button.scss"

interface Props {
    children: React.ReactNode,
    subClass?: string,
    unClick?: boolean,
    actionFn: () => void
}

export default function Button({children, subClass, actionFn, unClick}: Props) {

  return (
    <button
      className={`game-button ${subClass ? `game-button_${subClass}` : ""}`}
      onClick={()=> {
          onButtonPush(subClass as string)
          actionFn()
      }}
      disabled={unClick && true}
    >
      {children}
    </button>
  )
}
