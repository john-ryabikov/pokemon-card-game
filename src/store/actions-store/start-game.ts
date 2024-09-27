import type { Pokemon } from "@/types/cards.type";
import type { IGameStore } from "../game.types";

export const startGameAction = ( pokemonNumber: number, difficult: string, pokemons: Pokemon[], enemies: Pokemon[], initialGameSettings: Partial<IGameStore> ): Partial<IGameStore> => {
    
    const pokemonFromStore = pokemons.find(p => p.number === pokemonNumber) as Pokemon
    
    const dufficultFromSettings = enemies.find(e => e.difficult === difficult) as Pokemon
    
    return {
        ...initialGameSettings,
        // Настройки выбранного игрового покемона
        playerPokemonType: pokemonFromStore.type,
        playerEnergyLength: pokemonFromStore.energyLength,
        playerAttackPower: pokemonFromStore.attackPower,
        playerHP: pokemonFromStore.hp,
        // Настройки выбранной сложности
        enemyPokemonType: dufficultFromSettings.type,
        enemyEnergyLength: dufficultFromSettings.energyLength,
        enemyAttackPower: dufficultFromSettings.attackPower,
        enemyHP: dufficultFromSettings.hp
    } 
}