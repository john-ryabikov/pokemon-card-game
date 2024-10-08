import { useGameStore } from "@/store/game.store"
import { useEffect } from "react"

import popup_view_SFX from "/sounds/sfx/popup_view.wav"

import EndGameCont from "./EndGameCont"
import FirstOpenCont from "./FirstOpenCont"
import StoreCont from "./StoreCont"
import DifficultCont from "./DifficultCont"
import BoardCont from "./BoardCont"

import "./Popup.scss"

export default function Popup({ status }: { status: boolean }) {

    const popup_view = new Audio(popup_view_SFX)

    const { isFirstOpen, isFirstOpenStore, isFirstOpenDiff, isFirstOpenBoard, isGameEnd } = useGameStore()

    useEffect(() => {
        status !== null && popup_view.play()
    }, [])

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
