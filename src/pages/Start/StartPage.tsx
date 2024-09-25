import { Link } from "react-router-dom"
import { useLayoutEffect } from "react"
import { useGameStore, usePokemonsStore } from "@/store/game.store"
import { motion } from "framer-motion"

import "./StartPage.scss"

export default function StartPage() {

    const { pokemonSelected } = usePokemonsStore()
    const { startGame, loadingPokemons } = useGameStore()

    const preloadBoard = () => {
        startGame(pokemonSelected)
        loadingPokemons(3500)
    }

    useLayoutEffect(() => {
        document.title = `Pokemon Game`
    }, [])

    return (
        <motion.section 
            className='start-page'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.25 }}
        >
            <div className='start-page__logo'>
                <img className='start-page__logo-img' src="img/Icons/main_logo.png" alt="Pokemon" draggable={false}/>
                <h1 className='start-page__logo-title'>Duel Dash</h1>
            </div>
            <div className='start-page__btns'>
                <Link to={'/game'} className='start-page__btn' onClick={preloadBoard}>Start game</Link>
                <Link to={'/store'} className='start-page__btn start-page__btn_store' onClick={() => loadingPokemons(2500)}>Store</Link>
            </div>
            <span className='start-page__version'>Version: 0.0.3</span>
        </motion.section>     
    )
  }
  