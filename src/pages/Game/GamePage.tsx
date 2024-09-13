import { useEffect } from "react"
import { useGameStore } from "@/store/game.store"
import { POKEMONS } from "@/data/pokemons.cards";
import { createDeck } from "@/store/actions/game.create-deck";

import EnergyCard from "@/components/EnergyCard/EnergyCard"
import PokemonCard from "@/components/PokemonCard/PokemonCard"
import Popup from "@/components/Popup/Popup";

import "./GamePage.scss"

export default function GamePage({ title }:{ title: string }) {

    const {
        deck,
        playerEnergy,
        playerEnergyLength,
        enemyHP,
        energyBox,
        isGameEnd,
        isAttack,
        takeEnergy,
        gameOver,
        attackAction

    } = useGameStore()

    const playerTakeEnergy = () => {
        if (deck.length !== 1) {
            takeEnergy(deck[0].id as number) 
        } else gameOver()
    }

    useEffect(() => {
        document.title = `${title} | Pokemon Game`
        createDeck(deck)
    }, [deck])

    return (
        <section className='game-page'>
            {isGameEnd && <Popup/>}
            <div className="game-page__board">
                <PokemonCard card={POKEMONS[1].pokemonImg} energyLenght={POKEMONS[1].energyLength} hp={enemyHP}/>
                <PokemonCard card={POKEMONS[0].pokemonImg} energy={playerEnergy} energyLenght={playerEnergyLength}/>
            </div>
            <div className={`game-page__energy-box ${energyBox.length === 0 ? "game-page__energy-box_empty" : ""}`}>
                {!energyBox.length ? "Not enough enegry cards" : (
                    <div className='game-page__energy-box-wprapper'>
                        {energyBox.map((elem, i) => (
                            <EnergyCard key={i} card={elem}/>
                        ))}
                    </div>
                )}
            </div>
            <div className='game-page__actions'>
                <div className='game-page__btn-deck'>
                    <button disabled={isAttack} onClick={playerTakeEnergy}>
                        <img className={`game-page__btn-deck-icon ${isAttack ? "game-page__btn-deck-icon_disable" : ""}`} src="/img/Icons/cards_icon.svg"/>
                    </button>
                    <span>x{deck.length}</span>
                </div>
                <button 
                    disabled={!isAttack} 
                    className={`game-page__btn-deck-attack ${!isAttack ? "game-page__btn-deck-attack_disable" : ""}`}
                    onClick={() => attackAction()}
                >
                    Attack
                </button>
            </div>
        </section>
    )
}
