import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useGameMana, useGameStore, usePokemonsStore } from "@/store/game.store"
import { motion } from "framer-motion"

import Loading from "@/components/Loading/Loading"
import Button from "@/components/Button/Button"

import "./StartPage.scss"

export default function StartPage() {

    const navigate = useNavigate()

    const { mana, deleteMana, startTimer, resetTimer } = useGameMana()

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
        setTimeout(() => {
            loadingPokemons(3500)
            deleteMana()
            if (mana === 10) startTimer()
            if (mana < 10) resetTimer()
        }, 500)

        startGame(pokemonSelected)
        
        if (isFirstOpenBoard !== null) setTimeout(() => changeFirst("board-open"), 4800)
        navigate("/game")
    }

    const inStore = () => {
        setTimeout(() => loadingPokemons(2500), 500)
        if (isFirstOpenStore !== null) setTimeout(() => changeFirst("store-open"), 3800)
        navigate("/store")
    }

    useEffect(() => {document.title = `Pokemon Game`}, [])

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
                        <img className='start-page__logo-img' src="img/Icons/main_logo.png" alt="Pokemon" draggable="false"/>
                        <h1 className='start-page__logo-title'>Duel Dash</h1>
                    </div>
                    <div className='start-page__btns'>
                        <Button subClass={mana === 0 ?'board-lock' : 'board'} actionFn={playGame}>
                            <span>Начать дуэль</span>
                            <img src="img/Icons/replay_icon.svg" alt="Retry" draggable={false}/>
                        </Button>
                        <Button subClass={'store'} actionFn={inStore}>
                            <span>Магазин</span>
                        </Button>
                        <Button subClass={'rules'} actionFn={() => setTimeout(() => changeFirst('board-open'), 450)}>
                            <span>Об игре</span>
                        </Button>
                        <Button subClass={'author'} actionFn={() => setTimeout(() => changeFirst('author-open'), 450)}>
                            <span>Об авторе</span>
                        </Button>
                    </div>
                </>
                ) : <Loading/> 
            }
            <span className='start-page__version'>Version: 0.0.9</span>
        </motion.section>     
    )
  }
  
