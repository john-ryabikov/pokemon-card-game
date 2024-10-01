import type { IEnemeis, Pokemon } from "@/types/cards.type";
import type { IGameStore } from "../game.types";

export const startGameAction = ( pokemonNumber: number, enemyNumber: number, difficult: string, pokemons: Pokemon[], startedEnemy: IEnemeis[], initialGameSettings: Partial<IGameStore> ): Partial<IGameStore> => {
    
    const pokemonFromStore = pokemons.find(p => p.number === pokemonNumber) as Pokemon
    const currentDiff = startedEnemy.find(d => d.difficult === difficult) as IEnemeis
    
    return {
        ...initialGameSettings,
        // Настройки выбранного игрового покемона
        playerPokemonType: pokemonFromStore.type,
        playerEnergyLength: pokemonFromStore.energyLength,
        playerAttackPower: pokemonFromStore.attackPower,
        playerHP: pokemonFromStore.hp,
        // Настройки выбранной сложности
        enemyPokemonType: currentDiff.enemies[enemyNumber].type,
        enemyEnergyLength: currentDiff.enemies[enemyNumber].energyLength,
        enemyAttackPower: currentDiff.enemies[enemyNumber].attackPower,
        enemyHP: currentDiff.enemies[enemyNumber].hp
    } 
}