import { useGameStore } from "@/store/game.store"

import EndGameCont from "./EndGameCont"
import FirstOpenCont from "./FirstOpenCont"
import StoreCont from "./StoreCont"
import DifficultCont from "./DifficultCont"
import BoardCont from "./BoardCont"

import "./Popup.scss"

export default function Popup() {

    const { isFirstOpen, isFirstOpenStore, isFirstOpenDiff, isFirstOpenBoard, isGameEnd } = useGameStore()

    return (
        <div className='popup'>
            {isGameEnd && <EndGameCont/>}
            {isFirstOpen && <FirstOpenCont/>}
            {isFirstOpenStore && <StoreCont/>}
            {isFirstOpenDiff && <DifficultCont/>}
            {isFirstOpenBoard && <BoardCont/>}
        </div>
    )
}
