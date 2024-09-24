import { motion } from "framer-motion"
import { useGameStore } from "@/store/game.store"
import { useNavigate } from "react-router-dom"

import "./Header.scss"

export default function Header() {

    const navigate = useNavigate()

    const { isLoading } = useGameStore()

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
                    <button className='header__exit-btn' onClick={() => {setTimeout(() => (navigate("/")), 150)}}>
                        <img src="img/Icons/exit_icon.svg" alt="" draggable="false"/>
                    </button>
                    <div className='header__coins'>
                        <img className='header__coins-icon' src="img/Icons/pokecoin_icon.svg" alt="Pokecoin" draggable="false"/>
                        <span className='header__coins-total'>0</span>
                    </div>
                </motion.header>
            )}
        </>
    )
}
