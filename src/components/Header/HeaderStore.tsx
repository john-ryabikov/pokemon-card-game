import { motion } from "framer-motion"
import { useGameStore, usePokemonsStore } from "@/store/game.store"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

import Button from "../Button/Button"
import Indicator from "./Indicator"

import "./Header.scss"

export default function HeaderStore() {

    const navigate = useNavigate()
    const location = useLocation()

    const { 
        isLoading, 
        isFirstOpenBoard, 
        isFirstOpenStore, 
        isFirstOpenDiff,
        isWin,
        changeFirst, 
        changeEnemy, 
        gameExit 
    } = useGameStore()

    const { earnCoinsAfterWin } = usePokemonsStore()

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
                    initial={{ y: -120 }}
                    animate={{ y: 0 }}
                    exit={{ y: -120 }}
                    transition={{ delay: 0.45 }}
                >
                    <div className='header__btns'>
                        <Button subClass={'exit'} actionFn={exitGame}>
                            <img src="img/Icons/exit_icon.svg" alt="Exit" draggable="false"/>
                        </Button>
                        <Button subClass={'setup'} actionFn={() => setTimeout(() => changeFirst('store-open'), 450)}>
                            <img src="img/Icons/rules_icon.svg" alt="Exit" draggable="false"/>
                        </Button>
                    </div>
                    <div className='header__indicators'>
                        <Indicator type="coins"/>
                        <Indicator type="mana"/>
                    </div>
                </motion.header>
            )}
        </>
    )
}
