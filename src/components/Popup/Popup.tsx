import { useGameStore } from "@/store/game.store"
import { useEffect } from "react"
import { onViewPopup } from "@/actions-game/game.play-sounds"

import EndGameCont from "./EndGameCont"
import FirstOpenCont from "./FirstOpenCont"
import StoreCont from "./StoreCont"
import DifficultCont from "./DifficultCont"
import BoardCont from "./BoardCont"
import AuthorCont from "./AuthorCont"

import "./Popup.scss"

export default function Popup() {

    const { isSounds, isFirstOpen, isFirstOpenStore, isFirstOpenDiff, isFirstOpenBoard, isGameEnd, isAuthorOpen } = useGameStore()

    const status = isFirstOpenStore || isFirstOpenDiff || isFirstOpenBoard || isAuthorOpen

    useEffect(() => {isSounds && onViewPopup(status)}, [])

    return (
        <div className='popup'>
            {isGameEnd && <EndGameCont/>}
            {isFirstOpen && <FirstOpenCont/>}
            {isFirstOpenStore && <StoreCont/>}
            {isFirstOpenDiff && <DifficultCont/>}
            {isFirstOpenBoard && <BoardCont/>}
            {isAuthorOpen && <AuthorCont/>}
        </div>
    )
}
