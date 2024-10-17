import { motion } from "framer-motion"
import { useGameStore } from "@/store/game.store"
import { useNavigate } from "react-router-dom"

import Button from "../Button/Button"
import Indicator from "./Indicator"

import "./Header.scss"

export default function HeaderStart() {

    const navigate = useNavigate()

    const { isLoading, isFirstOpenDiff, changeFirst, loadingPokemons } = useGameStore()

    const difficultGame = () => {
        setTimeout(() => loadingPokemons(2500), 500)
        if (isFirstOpenDiff !== null) setTimeout(() => changeFirst("diff-open"), 3800)
        navigate("/difficult")
    }

    return (
        <>
            {!isLoading && (
                <motion.header 
                    className='header header_start'
                    initial={{ y: -120 }}
                    animate={{ y: 0 }}
                    exit={{ y: -120 }}
                    transition={{ delay: 0.45 }}
                >
                    <Button subClass={'diff'} actionFn={difficultGame}>
                        <img src="/img/Icons/settings_icon.svg" alt="Settings" draggable="false"/>
                    </Button>
                    <div className='header__indicators'>
                        <Indicator type="coins"/>
                        <Indicator type="mana"/>
                    </div>
                </motion.header>
            )}
        </>
    )
}
