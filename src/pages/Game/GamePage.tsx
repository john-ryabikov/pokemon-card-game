import { useEffect, useRef } from "react"
import { useGameStore } from "@/store/game.store"
import { motion } from "framer-motion"

import { createDeck } from "@/actions-game/game.create-deck"
import { playerTakeEnergy } from "@/actions-game/game.player-take-energy"

import Loading from "@/components/Loading/Loading"
import Popup from "@/components/Popup/Popup";
import Board from "@/components/Board/Board";
import EnergyBox from "@/components/EnergyBox/EnergyBox";

import "./GamePage.scss"

export default function GamePage({ title }:{ title: string }) {

    const energyBoxRef = useRef<HTMLDivElement>(null)

    const {
        deck,
        isGameEnd,
        isAttack,
        energyBox,
        isLoading,
        enemyEnergy,
        enemyEnergyLength,
        takeEnergy,
        gameOver,
        playerAttack,
        enemyAttack
    } = useGameStore()

    useEffect(() => {
        document.title = `${title} | Pokemon Game`
        createDeck(deck)
        if (enemyEnergy.length === enemyEnergyLength) {
            enemyAttack()
        }
    }, [deck, enemyEnergy])

    return (
        <motion.section 
            className='game-page'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
        >
            {isLoading ? <Loading/> : (
                <>
                    {isGameEnd && <Popup/>}
                    <Board/>
                    <EnergyBox ref={energyBoxRef}/>
                    <motion.div 
                        className='game-page__actions'
                        initial={{ y: 90 }}
                        whileInView={{ y: 0 }}
                        transition={{ delay: 0.35 }}
                    >
                        <div className='game-page__btn-deck'>
                            <button disabled={isAttack} onClick={() => playerTakeEnergy(deck, takeEnergy, energyBox, gameOver, energyBoxRef)}>
                                <img className={`game-page__btn-deck-icon ${isAttack ? "game-page__btn-deck-icon_disable" : ""}`} src="img/Icons/cards_icon.svg" alt="Cards Energy" draggable={false}/>
                            </button>
                            <span>x{deck.length}</span>
                        </div>
                        <button 
                            disabled={!isAttack} 
                            className={`game-page__btn-deck-attack ${!isAttack ? "game-page__btn-deck-attack_disable" : ""}`}
                            onClick={() => playerAttack()}
                        >
                            <span>Attack</span>
                        </button>
                    </motion.div>
                </>
            )}
        </motion.section>

    )
}
