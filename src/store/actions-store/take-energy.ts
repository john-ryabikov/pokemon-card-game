import type { Energy } from "@/types/cards.type";
import type { IGameStore } from "../game.types";
import { POKEMONS } from "@/data/pokemons.cards";

export const takeEnergyAction = (get: () => IGameStore, id: number): Partial<IGameStore> => {

    const state = get()

    state.enemyTurnCount += 1 

    if (state.enemyTurnCount % 2 === 0) {
        const enemy_energy = state.deck.find(elem => elem?.type === POKEMONS[6].type) as Energy
        state.enemyEnergy = [...state.enemyEnergy, enemy_energy]
    }

    const energy = state.deck.find(elem => elem.id === id) as Energy

    const energyDeckFiltered = state.deck.filter(elem => {
        if (elem.id !== id) return elem
    })

    return {
        deck: energyDeckFiltered,
        energyBox: [...state.energyBox, energy],
        enemyEnergy: state.enemyEnergy
    }
}