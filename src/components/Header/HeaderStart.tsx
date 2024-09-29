import { motion } from "framer-motion"
import { useGameStore, usePokemonsStore } from "@/store/game.store"
import { useNavigate } from "react-router-dom"

import "./Header.scss"

export default function HeaderStart() {

    const navigate = useNavigate()

    const { isLoading, loadingPokemons } = useGameStore()
    const { pokecoins } = usePokemonsStore()

    const difficultGame = () => {
        setTimeout(() => {
            loadingPokemons(2500)
        }, 500)
        navigate("/difficult")
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
                    <button className='header__btn header__btn_diff' onClick={difficultGame}>
                        <img src="/img/Icons/settings_icon.svg" alt="Settings" draggable="false"/>
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