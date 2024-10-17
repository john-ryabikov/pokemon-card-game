import type { IPokemonsStore } from "../game.types"

export const earnWinCoinsAction = (
    get: () => IPokemonsStore,
    set: (partial: IPokemonsStore | Partial<IPokemonsStore> | ((state: IPokemonsStore) => IPokemonsStore | Partial<IPokemonsStore>), replace?: boolean | undefined) => void,
    reward: number,
): Partial<IPokemonsStore> => {

    const state = get()

    let i = 0
    
    const earnCoins = setInterval(() => {
        i += 10
        set({ pokecoins: state.pokecoins += 10 })
        if (i >= reward) clearInterval(earnCoins)
    }, 5)

    return {
        pokecoins: state.pokecoins
    }
}