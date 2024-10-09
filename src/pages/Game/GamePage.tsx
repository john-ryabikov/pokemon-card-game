import { useEffect, useRef } from "react"
import { useDifficultStore, useGameStore, usePokemonsStore } from "@/store/game.store"
import { useMediaQuery } from "@/hooks/MediaQuery/useMediaQuery"
import { motion } from "framer-motion"
import take_card_SFX from "/sounds/sfx/deck.mp3"

import { createDeck } from "@/actions-game/game.create-deck"
import { playerTakeEnergy } from "@/actions-game/game.player-take-energy"

import Loading from "@/components/Loading/Loading"
import Board from "@/components/Board/Board";
import EnergyBox from "@/components/EnergyBox/EnergyBox";

import "./GamePage.scss"

export default function GamePage({ title }: { title: string }) {

    const isSmallMobile = useMediaQuery("(max-width: 389px)");

    const take_card = new Audio(take_card_SFX)

    const {
        deck,
        isAttack,
        isPlayerTurn,
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

    const { startedDiff } = useDifficultStore()

    const energyBoxRef = useRef<HTMLDivElement>(null)
    const indicateEnemy = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.title = `${title} | Pokemon Game`
        setTimeout(() => indicateEnemy.current && indicateEnemy.current.style.setProperty('width', `${indicateTurn}px`), 250 ) 
        createDeck(deck)
        if (enemyEnergy.length === enemyEnergyLength) {
            setTimeout(() => {
                enemyAttack()
            }, 950)
        }
    }, [deck, enemyEnergy, indicateTurn])

    const playEnergyCard = () => {
        take_card.play()
        playerTakeEnergy(
            deck, 
            takeEnergy, 
            energyBox, 
            gameOver, 
            energyBoxRef, 
            startedDiff.forCountTurn as number, 
            indicateEnemy.current?.offsetWidth as number,
            isSmallMobile,
            startedDiff
        )
    }

    const button_status = isAttack || isEnemyAttacked || enemyTakedEnergy || isPlayerTurn

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
                        initial={{ y: 100 }}
                        whileInView={{ y: 0 }}
                        exit={{ y: 100 }}
                        transition={{ delay: 0.45 }}
                    >
                        <div className='game-page__btn-deck-cont'>
                            <button 
                                className={`game-page__btn-deck ${button_status ? "game-page__btn-deck_lock" : ""}`} 
                                onClick={playEnergyCard}
                                disabled={button_status} 
                            >
                                <img 
                                    className={`game-page__btn-deck-icon ${button_status ? "game-page__btn-deck-icon_disable" : ""}`} 
                                    src="img/Icons/cards_icon.svg" 
                                    alt="Cards Energy" 
                                    draggable="false"
                                />
                            </button>
                            <span>x{deck.length}</span>
                        </div>
                        <button 
                            className={`game-page__btn-deck-attack ${!isAttack ? "game-page__btn-deck-attack_disable" : ""}`}
                            onClick={() => {
                                playerAttack()
                                earnCoinsAfterAttack(playerAttackPower, enemyHP)
                            }}
                            disabled={!isAttack} 
                        >
                            <span>Атака</span>
                        </button>
                    </motion.div>
                </>
            )}
        </motion.section>

    )
}
