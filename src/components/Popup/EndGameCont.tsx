import { useDifficultStore, useGameMana, useGameStore, usePokemonsStore } from "@/store/game.store"
import { motion } from "framer-motion"
import { useEffect } from "react"

import lose_SFX from "/sounds/sfx/lose.wav"
import win_SFX from "/sounds/sfx/win.mp3"

import Button from "../Button/Button"

export default function EndGameCont() {

    const {mana, deleteMana, resetTimer } = useGameMana()

    const { startedDiff } = useDifficultStore()

    const { pokemonSelected } = usePokemonsStore()

    const { isSounds, startGame, changeEnemy, loadingPokemons, isLose, isWin } = useGameStore()

    const sound_popup = new Audio()
    sound_popup.src = isLose ? lose_SFX : win_SFX

    const onWinOrLose = () => {
        sound_popup.currentTime = 0
        sound_popup.play()
    }

    useEffect(() => {isSounds && onWinOrLose()}, [isLose])

    const retryGame = () => {
        setTimeout(() => {
            deleteMana()
            resetTimer()
            changeEnemy()
            startGame(pokemonSelected)
            loadingPokemons(2500)
            isSounds && sound_popup.pause()
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
                    <span>{startedDiff.reward}</span>
                    <img src="img/Icons/pokecoin_icon.svg" alt="" draggable="false"/>
                </p>
            )}
            <div className='popup__buttons'>
                <Button subClass={mana === 0 ? 'retry-lock' : 'retry'} actionFn={retryGame}>
                    <span>Повторить</span>
                    <img src="img/Icons/replay_icon.svg" alt="Retry" draggable={false}/>
                </Button>
            </div>
        </motion.div>
    )
}
