import { useGameStore } from "@/store/game.store"
import { Link } from "react-router-dom"

import "./Popup.scss"

export default  function Popup() {

    const {startGame, isLose, isWin} = useGameStore()

    return (
        <div className="popup">
            <p className='popup__title'>
                {isLose && "You've lost!"}
                {isWin && "You've won!"}
            </p>
            <div className='popup__buttons'>
                <button className='popup__retry-btn' onClick={() => startGame()}>
                    <img src="img/Icons/replay_icon.svg" alt="Retry" draggable={false}/>
                </button>
                <Link to={'/'} className='popup__exit-btn'>
                    <img src="img/Icons/exit_icon.svg" alt="Exit" draggable={false}/>
                </Link>
            </div>
        </div>
    )
}
