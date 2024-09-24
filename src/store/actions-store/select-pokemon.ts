import type { Pokemon } from "@/types/cards.type";
import type { IPokemonsStore } from "../game.types";

export const selectPokemonAction = ( get: () => IPokemonsStore, pokemonNumber: number ): Partial<IPokemonsStore> => {

    const state = get()

    const selectedPokemon = state.pokemons.find(p => p.number === pokemonNumber) as Pokemon

    state.pokemonSelected = selectedPokemon.number,
    state.startedPokemon = selectedPokemon

    return {
        pokemonSelected: state.pokemonSelected,
        startedPokemon: state.startedPokemon
    }

}