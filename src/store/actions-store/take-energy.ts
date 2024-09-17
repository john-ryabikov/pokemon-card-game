import type { Energy } from "@/types/cards.type";
import type { IGameStore } from "../game.types";

export const takeEnergyAction = (get: () => IGameStore, id: number): Partial<IGameStore> => {

    const state = get()

    const energy = state.deck.find(elem => elem.id === id) as Energy
    const energyDeckFiltered = state.deck.filter(elem => {
        if (elem.id !== id) return elem
    })

    return {
        deck: energyDeckFiltered,
        energyBox: [...state.energyBox, energy]
    }
}