import type { Energy, Pokemon, TypeEnergies } from "@/types/cards.type";

export interface IGameStore {
    deck: Energy[],
    // Настройки выбранного игрового покемона
    playerPokemonType: TypeEnergies,
    playerEnergy: Energy[],
    playerEnergyLength: number,
    playerAttackPower: number,
    playerHP: number,
    // Настройки выбранной сложности
    enemyTurnCount: number,
    enemyPokemonType: TypeEnergies,
    enemyEnergy: Energy[],
    enemyAttackPower: number,
    enemyEnergyLength: number,
    enemyHP: number,
    // Общие настройки игры
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
    loadingGame: (timeout: number) => void,
    loadingPokemons: (timeout: number) => Promise<void>
    startGame: (pokemonNumber: number, difficult: string) => void,
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
    earnCoinsAfterWin: () => void,
    spendCoins: (pokemonCost: number) => void,
    unlockPokemon: (pokemonNumber: number) => void,
    upgradePokemon: (pokemonNumber: number, stage: number) => void
}

export interface IEnemyDifficult {
    enemies: Pokemon[],
    difficultSelected: 'easy' | 'normal' | 'hard' | undefined,
    startedEnemy: Pokemon,
    selectDifficult: (difficult: string) => void,
    unlockDifficult: (difficult: string) => void
}