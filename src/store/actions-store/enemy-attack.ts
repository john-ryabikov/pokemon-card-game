import type { IGameStore } from "../game.types";

export const enemyAttackAction = (
    set: (partial: IGameStore | Partial<IGameStore> | ((state: IGameStore) => IGameStore | Partial<IGameStore>), replace?: boolean | undefined) => void, 
    get: () => IGameStore
): Partial<IGameStore> => {

    const state = get()

    state.isEnemyAttacked = true
    
    setTimeout(() => {
        set({ isEnemyAttacked : false })
    }, 900)

    
    state.playerHP -= state.enemyAttackPower 
    state.enemyEnergy = []

    if (state.playerHP <= 0) {
        state.playerHP = 0
        setTimeout(() => {
            set({ isLose: true, isGameEnd: true })
        }, 900)
    }
    return {
        playerHP: state.playerHP,
        enemyEnergy: state.enemyEnergy
    }
}