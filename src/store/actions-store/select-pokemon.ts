import type { Pokemon } from "@/types/cards.type";
import type { IGameStore } from "../game.types";

export const selectPokemonAction = (get: () => IGameStore, pokemons: Pokemon[], pokemonNumber: number, ) => {

    const state = get()

    const selectedPokemon = pokemons.find(p => p.number === pokemonNumber) as Pokemon

    state.pokemonSelected = pokemonNumber,
    state.playerPokemon = selectedPokemon.pokemonImg,
    state.playerPokemonType = selectedPokemon.type,
    state.playerEnergy = selectedPokemon.energy,
    state.playerEnergyLength = selectedPokemon.energyLength,
    state.playerAttackPower = selectedPokemon.attackPower,
    state.playerHP = selectedPokemon.hp,
    state.playerAttackEffect = selectedPokemon.attackEffect

    return {
        playerPokemon: state.playerPokemon,
        playerPokemonType: state.playerPokemonType,
        playerEnergy: state.playerEnergy,
        playerEnergyLength: state.playerEnergyLength,
        playerAttackPower: state.playerAttackPower,
        playerHP: state.playerHP
    }

}