import type { IPokemonsStore } from "../game.types"

export const earnCoinsAction = (
    get: () => IPokemonsStore,
    set: (partial: IPokemonsStore | Partial<IPokemonsStore> | ((state: IPokemonsStore) => IPokemonsStore | Partial<IPokemonsStore>), replace?: boolean | undefined) => void,
    coins: number,
): Partial<IPokemonsStore> => {
    const state = get()
    let i = 0
    let earnCoins = setInterval(() => {
        i++
        set({ pokecoins: state.pokecoins += 1 })
        if (i >= coins) clearInterval(earnCoins)
    }, 10)

    return {
        pokecoins: state.pokecoins
    }
}