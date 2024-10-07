import { useDifficultStore, useGameStore, usePokemonsStore } from "@/store/game.store"
import { motion } from "framer-motion"
import Button from "../Button/Button"

export default function EndGameCont() {

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
        <motion.div 
            className='popup__cont'
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.15 }}
        >
            <p className='popup__title'>
                {isLose && "Вы проиграли!"}
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
                <Button subClass='retry' actionFn={retryGame}>
                    <img src="img/Icons/replay_icon.svg" alt="Retry" draggable={false}/>
                    <span>Повторить</span>
                </Button>
            </div>
        </motion.div>
    )
}
