import { useDifficultStore, useGameStore, usePokemonsStore } from "@/store/game.store"
import { motion } from "framer-motion"

import "./Popup.scss"

export default  function Popup() {

    const { startedDiff } = useDifficultStore()
    const { pokemonSelected } = usePokemonsStore()
    const { startGame, changeEnemy, loadingGame, isLose, isWin } = useGameStore()

    const retryGame = () => {
        setTimeout(() => {
            changeEnemy()
            startGame(pokemonSelected)
            loadingGame(2500)
        }, 450)
    }

    return (
        <div className='popup'>
            <motion.div 
                className='popup__cont'
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ delay: 0.15 }}
            >
                <p className='popup__title'>
                    {isLose && "Дуэль проиграна!"}
                    {isWin && "Дуэль выиграна!"}
                </p>
                {isWin && (
                    <p className='popup__win-coins'>
                        <span>+</span>
                        <img src="img/Icons/pokecoin_icon.svg" alt="" draggable="false"/>
                        <span>{startedDiff.reward}</span>
                    </p>
                )}
                <div className='popup__buttons'>
                    <button className='popup__retry-btn' onClick={retryGame}>
                        <img src="img/Icons/replay_icon.svg" alt="Retry" draggable={false}/>
                        <span>Повторить</span>
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
