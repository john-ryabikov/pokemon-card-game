import { POKEMONS } from "@/data/pokemons.cards"

export const fetchPokemonsAction = (timeout: number) => new Promise(resolve => setTimeout(() => resolve(POKEMONS), timeout))