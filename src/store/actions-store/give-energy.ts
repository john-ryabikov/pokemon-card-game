import type { Energy } from "@/types/cards.type";
import type { IGameStore } from "../game.types";

export const giveEnergyAction = (get: () => IGameStore, id: number): Partial<IGameStore> => {
    
    const state = get()

    const energy = state.energyBox.find(elem => elem?.id === id) as Energy
    const energyBoxFiltered = state.energyBox.filter(elem => {
        if (elem.id !== id) return elem
    })
    if (state.playerEnergy.length < state.playerEnergyLength && energy.type === state.playerPokemonType) {
        state.playerEnergy = [...state.playerEnergy, energy]
        if (state.playerEnergy.length === state.playerEnergyLength) {
            return { 
                energyBox: energyBoxFiltered,
                isAttack: !state.isAttack
            }
        } else {
            return { energyBox: energyBoxFiltered }
        }

    } else return state
}