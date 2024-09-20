import { POKEMONS } from "@/data/pokemons.cards"

export const fetchPokemonsAction = () => new Promise(resolve => setTimeout(() => resolve(POKEMONS), 3500))