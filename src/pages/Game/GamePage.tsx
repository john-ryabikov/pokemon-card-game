import { useEffect, useRef } from "react"
import { useDifficultStore, useGameStore, usePokemonsStore } from "@/store/game.store"
import { motion } from "framer-motion"

import { createDeck } from "@/actions-game/game.create-deck"
import { playerTakeEnergy } from "@/actions-game/game.player-take-energy"

import Loading from "@/components/Loading/Loading"
import Board from "@/components/Board/Board";
import EnergyBox from "@/components/EnergyBox/EnergyBox";

import "./GamePage.scss"
import { useMediaQuery } from "@/hooks/MediaQuery/useMediaQuery"

export default function GamePage({ title }: { title: string }) {

    const isSmallMobile = useMediaQuery("(max-width: 389px)");

    const {
        deck,
        isAttack,
        isEnemyAttacked,
        indicateTurn,
        enemyTakedEnergy,
        energyBox,
        isLoading,
        enemyEnergy,
        enemyEnergyLength,
        playerAttackPower,
        enemyHP,
        takeEnergy,
        gameOver,
        playerAttack,
        enemyAttack
    } = useGameStore()

    const { earnCoinsAfterAttack } = usePokemonsStore()

    const { startedEnemy } = useDifficultStore()

    const energyBoxRef = useRef<HTMLDivElement>(null)
    const indicateEnemy = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.title = `${title} | Pokemon Game`
        if (indicateEnemy.current) indicateEnemy.current.style.setProperty('width', `${indicateTurn}px`)
        createDeck(deck)
        if (enemyEnergy.length === enemyEnergyLength) {
            setTimeout(() => {
                enemyAttack()
            }, 950)
        }
    }, [deck, enemyEnergy, indicateTurn])

    const playEnergyCard = () => {
        playerTakeEnergy(
            deck, 
            takeEnergy, 
            energyBox, 
            gameOver, 
            energyBoxRef, 
            startedEnemy.forCountTurn as number, 
            indicateEnemy.current?.offsetWidth as number,
            isSmallMobile
        )
    }

    return (
        <motion.section 
            className='game-page'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
        >
            {isLoading ? <Loading/> : (
                <>
                    <Board ref={indicateEnemy}/>
                    <EnergyBox ref={energyBoxRef}/>
                    <motion.div 
                        className='game-page__actions'
                        initial={{ y: 90 }}
                        whileInView={{ y: 0 }}
                        exit={{ y: 100 }}
                        transition={{ delay: 0.45 }}
                    >
                        <div className='game-page__btn-deck'>
                            <button disabled={isAttack || isEnemyAttacked || enemyTakedEnergy} onClick={playEnergyCard}>
                                <img className={`game-page__btn-deck-icon ${(isAttack || isEnemyAttacked || enemyTakedEnergy) ? "game-page__btn-deck-icon_disable" : ""}`} src="img/Icons/cards_icon.svg" alt="Cards Energy" draggable={false}/>
                            </button>
                            <span>x{deck.length}</span>
                        </div>
                        <button 
                            disabled={!isAttack} 
                            className={`game-page__btn-deck-attack ${!isAttack ? "game-page__btn-deck-attack_disable" : ""}`}
                            onClick={() => {
                                playerAttack()
                                earnCoinsAfterAttack(playerAttackPower, enemyHP)
                            }}
                        >
                            <span>Атака</span>
                        </button>
                    </motion.div>
                </>
            )}
        </motion.section>

    )
}
