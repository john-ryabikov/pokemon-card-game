import { motion } from "framer-motion"
import { useGameStore, usePokemonsStore } from "@/store/game.store"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

import "./Header.scss"

export default function Header() {

    const navigate = useNavigate()
    const location = useLocation()

    const { isLoading, isWin, gameExit } = useGameStore()
    const { pokecoins, earnCoinsAfterWin } = usePokemonsStore()

    useEffect(() => {
        if (isWin) setTimeout(() => earnCoinsAfterWin(), 100) 
    }, [isWin])

    const exitGame = () => {
        setTimeout(() => {
            navigate("/")
            if (location.pathname !== "/store") gameExit()
        }, 150)
    }

    return (
        <>
            {!isLoading && (
                <motion.header 
                    className='header'
                    initial={{ y: -90 }}
                    animate={{ y: 0 }}
                    exit={{ y: -90 }}
                    transition={{ delay: 0.45 }}
                >
                    <button className='header__btn header__btn_exit' onClick={exitGame}>
                        <img src="img/Icons/exit_icon.svg" alt="" draggable="false"/>
                    </button>
                    <div className='header__coins'>
                        <img className='header__coins-icon' src="img/Icons/pokecoin_icon.svg" alt="Pokecoin" draggable="false"/>
                        <span className='header__coins-total'>{pokecoins}</span>
                    </div>
                </motion.header>
            )}
        </>
    )
}
