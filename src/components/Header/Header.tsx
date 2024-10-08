import { motion } from "framer-motion"
import { useGameStore, usePokemonsStore } from "@/store/game.store"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

import Button from "../Button/Button"

import "./Header.scss"

export default function Header() {

    const navigate = useNavigate()
    const location = useLocation()

    const { isLoading, isFirstOpenBoard, isFirstOpenStore, isFirstOpenDiff, isWin, changeEnemy, gameExit } = useGameStore()
    const { pokecoins, earnCoinsAfterWin } = usePokemonsStore()

    useEffect(() => {
        if (isWin) setTimeout(() => earnCoinsAfterWin(), 100) 
    }, [isWin])

    const exitGame = () => {
        setTimeout(() => {
            navigate("/")
            location.pathname !== "/store" && gameExit()
            location.pathname === "/game" && setTimeout(() => changeEnemy(), 600)
        }, 150)
    }

    return (
        <>
            {!isLoading && (
                <motion.header 
                    className={`header ${(isFirstOpenBoard || isFirstOpenStore || isFirstOpenDiff) ? "header_popup" : ""}`}
                    initial={{ y: -90 }}
                    animate={{ y: 0 }}
                    exit={{ y: -90 }}
                    transition={{ delay: 0.45 }}
                >
                    <Button subClass={'exit'} actionFn={exitGame}>
                        <img src="img/Icons/exit_icon.svg" alt="" draggable="false"/>
                    </Button>
                    <div className='header__coins'>
                        <img className='header__coins-icon' src="img/Icons/pokecoin_icon.svg" alt="Pokecoin" draggable="false"/>
                        <span className='header__coins-total'>{pokecoins}</span>
                    </div>
                </motion.header>
            )}
        </>
    )
}
