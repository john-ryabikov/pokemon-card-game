import { useGameStore, usePokemonsStore } from "@/store/game.store"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import "./Popup.scss"

export default  function Popup() {

    const navigate = useNavigate()

    const { pokemonSelected } = usePokemonsStore()
    const {startGame, isLose, isWin } = useGameStore()

    return (
        <div className='popup'>
            <motion.div 
                className='popup__cont'
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ delay: 0.15 }}
            >
                <p className='popup__title'>
                    {isLose && "You've lost!"}
                    {isWin && "You've won!"}
                </p>
                <div className='popup__buttons'>
                    <button className='popup__retry-btn' onClick={() => {setTimeout(() => startGame(pokemonSelected), 250)}}>
                        <img src="img/Icons/replay_icon.svg" alt="Retry" draggable={false}/>
                    </button>
                    <button onClick={() => {setTimeout(() => (navigate("/")), 250)}} className='popup__exit-btn'>
                        <img src="img/Icons/exit_icon.svg" alt="Exit" draggable={false}/>
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
