import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useGameStore, usePokemonsStore } from "@/store/game.store"
import { motion } from "framer-motion"

import Loading from "@/components/Loading/Loading"

import "./StartPage.scss"

export default function StartPage() {

    const navigate = useNavigate()

    const { pokemonSelected } = usePokemonsStore()

    const { 
        isLoading, 
        isFirstOpenStore, 
        isFirstOpenBoard, 
        changeFirst, 
        startGame, 
        loadingPokemons
    } = useGameStore()

    const playGame = () => {
        startGame(pokemonSelected)
        setTimeout(() => loadingPokemons(3500), 500)
        if (isFirstOpenBoard !== null) setTimeout(() => changeFirst("board-open"), 4800)
        navigate("/game")
    }

    const inStore = () => {
        setTimeout(() => loadingPokemons(2500), 500)
        if (isFirstOpenStore !== null) setTimeout(() => changeFirst("store-open"), 3800)
        navigate("/store")
    }

    useEffect(() => {
        document.title = `Pokemon Game`
    }, [])

    return (
        <motion.section 
            className='start-page'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.45 }}
        >
            {!isLoading ? (
                <>
                    <div className='start-page__logo'>
                        <img className='start-page__logo-img' src="img/Icons/main_logo.png" alt="Pokemon" draggable={false}/>
                        <h1 className='start-page__logo-title'>Duel Dash</h1>
                    </div>
                    <div className='start-page__btns'>
                        <button className='start-page__btn' onClick={playGame}>Начать игру</button>
                        <button className='start-page__btn start-page__btn_store' onClick={inStore}>Магазин</button>
                    </div>
                </>
                ) : <Loading/> 
            }
            <span className='start-page__version'>Version: 0.0.4</span>
        </motion.section>     
    )
  }
  