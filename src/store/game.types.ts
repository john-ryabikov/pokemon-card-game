import type { Energy, Pokemon, TypeEnergies } from "@/types/cards.type";

export interface IGameStore {
    deck: Energy[],
    playerPokemonType: TypeEnergies,
    playerEnergy: Energy[],
    playerEnergyLength: number,
    playerAttackPower: number,
    playerHP: number,
    enemyTurnCount: number,
    enemyEnergy: Energy[],
    enemyAttackPower: number,
    enemyEnergyLength: number,
    enemyHP: number,
    energyBox: Energy[],
    isGameEnd: boolean,
    isLose: boolean,
    isWin: boolean,
    isAttack: boolean,
    isPlayerAttacked: boolean,
    isEnemyAttacked: boolean,
    isLoading: boolean,
    error: null,
    enemyTakedEnergy: boolean,
    loadingPokemons: (timeout: number) => Promise<void>
    startGame: (pokemonNumber: number) => void,
    takeEnergy: (id: number) => void,
    giveEnergy: (id: number) => void,
    playerAttack: () => void,
    enemyAttack: () => void,
    gameOver: () => void,
    gameExit: () => void
}

export interface IPokemonsStore {
    pokemons: Pokemon[],
    pokecoins: number,
    pokemonSelected: number;
    startedPokemon: Pokemon,
    selectPokemon: (pokemonNumber: number) => void,
    earnCoinsAfterAttack: (coins: number, enemyHP: number) => void,
    earnCoinsAfterWin: (coins: number) => void,
    spendCoins: (pokemonCost: number) => void,
    unlockPokemon: (pokemonNumber: number) => void,
    upgradePokemon: (pokemonNumber: number, stage: number) => void
}