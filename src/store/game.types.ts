import type { Energy, IEnemeis, Pokemon, TypeEnergies } from "@/types/cards.type";

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
    indicateTurn: number,
    enemyPokemonType: string | TypeEnergies,
    enemyEnergy: Energy[],
    enemyAttackPower: number,
    enemyEnergyLength: number,
    enemyHP: number,
    // Общие настройки игры (в сбросе)
    energyBox: Energy[],
    isGameEnd: boolean,
    isLose: boolean,
    isWin: boolean,
    isAttack: boolean,
    isPlayerAttacked: boolean,
    isEnemyAttacked: boolean,
    // Общие настройки игры (без сброса)
    isSounds: boolean,
    isLoading: boolean,
    isFirstOpen: boolean | null,
    isFirstOpenStore: boolean | null,
    isFirstOpenBoard: boolean | null,
    isFirstOpenDiff: boolean | null,
    isAuthorOpen: boolean,
    isPlayerTurn: boolean,
    error: null,
    randomEnemy: number,
    enemyTakedEnergy: boolean,
    // Общие функции игры
    changeFirst: (firsted: string) => void,
    deleteFirst: (firsted: string) => void,
    changeEnemy: () => void,
    loadingGame: (media: string[]) => void,
    loadingPokemons: (timeout: number) => Promise<void>
    startGame: (pokemonNumber: number) => void,
    takeEnergy: (id: number, indicateEnemy: number, startedDiff: IEnemeis ) => void,
    giveEnergy: (id: number) => void,
    playerAttack: () => void,
    enemyAttack: () => void,
    gameOver: () => void,
    gameExit: () => void,
    changeSounds: () => void
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
    enemies: IEnemeis[],
    difficultSelected: 'easy' | 'normal' | 'hard' | 'very-hard' | undefined,
    startedDiff: IEnemeis,
    selectDifficult: (difficult: string) => void,
    unlockDifficult: (difficult: string) => void
}

export interface IGameMana {
    mana: number,
    maxMana: number,
    timer: null | NodeJS.Timeout | void,
    isEnoughMana: boolean,
    lastTime: number,
    deleteMana: () => void,
    addMana: () => void,
    startTimer: () => void,
    resetTimer: () => void,
    stopTimer: () => void
}