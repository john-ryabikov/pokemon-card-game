import type { IGameStore } from "../game.types";

export const attackAction = (
    set: (partial: IGameStore | Partial<IGameStore> | ((state: IGameStore) => IGameStore | Partial<IGameStore>), replace?: boolean | undefined) => void, 
    get: () => IGameStore
): Partial<IGameStore> => {

    const state = get()

    state.isAttacked = true
    
    setTimeout(() => {
        set({ isAttacked : false })
    }, 900)

    
    state.enemyHP -= state.playerAttackPower 
    state.playerEnergy = []

    if (state.enemyHP <= 0) {
        state.enemyHP = 0
        setTimeout(() => {
            set({ isWin: true, isGameEnd: true })
        }, 900)
    }

    return { isAttack: !state.isAttack }
}