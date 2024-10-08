import { motion } from "framer-motion"
import { useGameStore, usePokemonsStore } from "@/store/game.store"
import { useNavigate } from "react-router-dom"
import popup_view_SFX from "/sounds/sfx/popup_view.wav"

import Button from "../Button/Button"

import "./Header.scss"

export default function HeaderStart() {

    const navigate = useNavigate()

    const { isLoading, isFirstOpenDiff, changeFirst, loadingPokemons } = useGameStore()
    const { pokecoins } = usePokemonsStore()

    const popup_view = new Audio(popup_view_SFX)

    const difficultGame = () => {
        setTimeout(() => loadingPokemons(2500), 500)
        if (isFirstOpenDiff !== null) setTimeout(() => {
            popup_view.play()
            changeFirst("diff-open")
        }, 3800)
        navigate("/difficult")
    }

    return (
        <>
            {!isLoading && (
                <motion.header 
                    className='header header_start'
                    initial={{ y: -90 }}
                    animate={{ y: 0 }}
                    exit={{ y: -90 }}
                    transition={{ delay: 0.45 }}
                >
                    <Button subClass={'diff'} actionFn={difficultGame}>
                        <img src="/img/Icons/settings_icon.svg" alt="Settings" draggable="false"/>
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
