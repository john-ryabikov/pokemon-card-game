import type { Energy, TypeEnergies } from "@/types/cards.type";
import type { IGameStore } from "../game.types";

export const takeEnergyAction = (
    set: (partial: IGameStore | Partial<IGameStore> | ((state: IGameStore) => IGameStore | Partial<IGameStore>), replace?: boolean | undefined) => void,
    get: () => IGameStore, 
    id: number,
    type: TypeEnergies
): Partial<IGameStore> => {

    const state = get()

    state.enemyTurnCount += 1
    
    const energy = state.deck.find(elem => elem.id === id) as Energy

    const energyDeckFiltered = state.deck.filter(elem => {
        if (elem.id !== id) return elem
    })

    if (state.enemyTurnCount % 5 === 0) {
        const enemy_energy = state.deck.find(elem => elem?.type === type) as Energy
        state.enemyEnergy = [...state.enemyEnergy, enemy_energy]
        state.enemyTakedEnergy = true
        setTimeout(() => {
            set({ enemyTakedEnergy : false })
        }, 900)
    }

    return {
        deck: energyDeckFiltered,
        energyBox: [...state.energyBox, energy],
        enemyEnergy: state.enemyEnergy
    }
}
