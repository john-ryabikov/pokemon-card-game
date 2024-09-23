import type { Energy, Pokemon, TypeEnergies } from "@/types/cards.type";

export interface IGameStore {
    deck: Energy[],
    pokemonSelected: number;
    playerPokemon: string,
    playerPokemonType: TypeEnergies,
    playerEnergy: Energy[],
    playerEnergyLength: number,
    playerHP: number,
    playerAttackPower: number,
    playerAttackEffect: string,
    enemyTurnCount: number,
    enemyEnergy: Energy[],
    enemyEnergyLength: number,
    enemyHP: number,
    enemyAttackPower: number,
    energyBox: Energy[],
    isGameEnd: boolean,
    isLose: boolean,
    isWin: boolean,
    isAttack: boolean,
    isPlayerAttacked: boolean,
    isEnemyAttacked: boolean,
    isLoading: boolean,
    error: null,
    loadingPokemons: (timeout: number) => Promise<void>
    selectPokemon: (pokemonNumber: number) => void,
    startGame: (pokemonNumber: number) => void,
    takeEnergy: (id: number) => void,
    giveEnergy: (id: number) => void,
    playerAttack: () => void,
    enemyAttack: () => void,
    gameOver: () => void,
}

export interface IPokemonsStore {
    pokemons: Pokemon[],
    startedPokemon: Pokemon,
}