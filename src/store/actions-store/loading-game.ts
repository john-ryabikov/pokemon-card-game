import type { IGameStore } from "../game.types";

export const loadingGameAction = (
    set: (partial: IGameStore | Partial<IGameStore> | ((state: IGameStore) => IGameStore | Partial<IGameStore>), replace?: boolean | undefined) => void,
    get: () => IGameStore, 
    timeout: number
): Partial<IGameStore> => {
    
    const state = get()

    setTimeout(() => {
        set({ isLoading: !state.isLoading })
    }, timeout)

    return state
} 