import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useGameStore } from "@/store/game.store"
import { motion } from "framer-motion"

import "./StartPage.scss"

export default function StartPage() {

    useEffect(() => {
        document.title = `Pokemon Game`
    }, [])

    const { startGame } = useGameStore()

    return (
        <motion.section 
            className='start-page'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
        >
            <img className='start-page__logo' src="img/Icons/main_logo.png" alt="Pokemon" draggable={false}/>
            <div className='start-page__btns'>
                <Link to={'/game'} className='start-page__btn' onClick={() => startGame()}>Start game</Link>
                <Link to={'/store'} className='start-page__btn start-page__btn_store'>Store</Link>
            </div>
            <span className='start-page__version'>Version: 0.0.1</span>
        </motion.section>
    )
  }
  