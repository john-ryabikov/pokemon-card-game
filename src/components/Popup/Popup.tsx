import { useGameStore } from "@/store/game.store"

import EndGameCont from "./EndGameCont"
import FirstOpenCont from "./FirstOpenCont"

import "./Popup.scss"


export default function Popup() {

    const { isFirstOpen, isGameEnd } = useGameStore()

    return (
        <div className='popup'>
            {isGameEnd && <EndGameCont/>}
            {isFirstOpen && <FirstOpenCont/>}
        </div>
    )
}
