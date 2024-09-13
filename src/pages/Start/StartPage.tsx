import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useGameStore } from "@/store/game.store"

import "./StartPage.scss"

export default function StartPage() {

    useEffect(() => {
        document.title = `Pokemon Game`
    }, [])

    const { startGame } = useGameStore()

    return (
        <section className='start-page'>
            <img className='start-page__logo' src="/img/Icons/main_logo.png"/>
            <Link to={'/game'} className='start-page__btn' onClick={() => startGame()}>Start game</Link>
        </section>
    )
  }
  