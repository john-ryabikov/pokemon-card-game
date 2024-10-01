import type { IPokemonsStore } from "../game.types"

export const earnCoinsAction = (
    get: () => IPokemonsStore,
    set: (partial: IPokemonsStore | Partial<IPokemonsStore> | ((state: IPokemonsStore) => IPokemonsStore | Partial<IPokemonsStore>), replace?: boolean | undefined) => void,
    coins: number,
    enemyHP: number,
): Partial<IPokemonsStore> => {

    const state = get()

    let i = 0

    const earnCoins = setInterval(() => {
        i++
        set({ pokecoins: state.pokecoins += 1 })
        if (enemyHP < coins) {
            if (i >= enemyHP) clearInterval(earnCoins)
        } else {
            if (i >= coins) clearInterval(earnCoins)
        }
    }, 5)

    return {
        pokecoins: state.pokecoins
    }
}