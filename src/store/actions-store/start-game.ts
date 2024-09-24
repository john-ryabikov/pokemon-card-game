import type { Pokemon } from "@/types/cards.type";
import type { IGameStore } from "../game.types";

export const startGameAction = ( pokemonNumber: number, pokemons: Pokemon[], initialGameSettings: Partial<IGameStore> ): Partial<IGameStore> => {
    const pokemonFromStore = pokemons.find(p => p.number === pokemonNumber) as Pokemon
    return {
        ...initialGameSettings,
        playerPokemonType: pokemonFromStore.type,
        playerEnergyLength: pokemonFromStore.energyLength,
        playerAttackPower: pokemonFromStore.attackPower,
        playerHP: pokemonFromStore.hp
    } 
}