import type { Energy, IEnemeis } from "@/types/cards.type";
import type { IGameStore } from "../game.types";

export const takeEnergyAction = (
    set: (partial: IGameStore | Partial<IGameStore> | ((state: IGameStore) => IGameStore | Partial<IGameStore>), replace?: boolean | undefined) => void,
    get: () => IGameStore, 
    id: number, // номер карты из колоды энергий
    random: number, // номер рандомного вражеского покемона
    enemies: IEnemeis, // конкретные вражеские покемны из стора
    indicateEnemy: number // индикатор хода вражеского покемона
): Partial<IGameStore> => {

    const state = get()

    // прибавляем к ходу вражеского покемона и пополняем индикатор каждый 1-й раз
    state.enemyTurnCount += 1
    state.indicateTurn = indicateEnemy
    
    // вытягиваем карту энергии из колоды и фильтруем колоду
    const energy = state.deck.find(elem => elem.id === id) as Energy
    const energyDeckFiltered = state.deck.filter(elem => {
        if (elem.id !== id) return elem
    })

    // добавление энергии для вражеского покемона при условии
    if (state.enemyTurnCount % enemies.forCountTurn === 0) {
        const enemy_energy = state.deck.find(elem => elem?.type === enemies.enemies[random].type) as Energy
        state.enemyEnergy = [...state.enemyEnergy, enemy_energy]
        state.enemyTakedEnergy = true
        state.indicateTurn = 0
        setTimeout(() => {
            set({ 
                enemyTakedEnergy : false,
            })
        }, 900)
    }

    return {
        deck: energyDeckFiltered,
        energyBox: [...state.energyBox, energy],
        enemyEnergy: state.enemyEnergy
    }
}
