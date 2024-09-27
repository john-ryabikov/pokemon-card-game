import { fetchPokemonsAction } from "@/actions-game/get-pokemons";
import type { IGameStore } from "../game.types";
import type { Pokemon } from "@/types/cards.type";

export const loadingPokemonsAction = async (get: () => IGameStore, timeout: number): Promise<Partial<IGameStore>> => {
    
    const state = get()

    state.isLoading = true
    
    try {
        const res = await fetchPokemonsAction(timeout) as Pokemon[]
        if (res) return { isLoading: !state.isLoading }
    } catch (error: any) {
        return { error: error.message }
    } finally {
        return { isLoading: !state.isLoading }
    }
} 