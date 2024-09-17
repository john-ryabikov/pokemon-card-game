import type { IGameStore } from "../game.types";

export const gameOverAction = (get: () => IGameStore): Partial<IGameStore> => {

    const state = get()
    
    return {
        isLose: !state.isLose,
        isGameEnd: !state.isGameEnd 
    }
}