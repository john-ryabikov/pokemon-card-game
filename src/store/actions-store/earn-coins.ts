import type { IPokemonsStore } from "../game.types"

export const earnCoinsAfterAttackAction = (
    get: () => IPokemonsStore,
    set: (partial: IPokemonsStore | Partial<IPokemonsStore> | ((state: IPokemonsStore) => IPokemonsStore | Partial<IPokemonsStore>), replace?: boolean | undefined) => void
): Partial<IPokemonsStore> => {
    const state = get()
    let i = 0
    let earnCoins = setInterval(() => {
        i++
        set({ pokecoins: state.pokecoins += 1 })
        if (i >= 5) clearInterval(earnCoins)
    }, 100)

    return {
        pokecoins: state.pokecoins
    }
}