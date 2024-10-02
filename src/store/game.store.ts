import { create } from "zustand"
import { ENERGY } from "@/data/energy.cards"
import { POKEMONS } from "@/data/pokemons.cards"
import { ENEMIES } from "@/data/enemies.cards"

import type { IEnemyDifficult, IGameStore, IPokemonsStore } from "./game.types";

import { gameOverAction } from "./actions-store/game-over";
import { takeEnergyAction } from "./actions-store/take-energy";
import { giveEnergyAction } from "./actions-store/give-energy";
import { playerAttackAction } from "./actions-store/player-attack";
import { selectPokemonAction } from "./actions-store/select-pokemon";
import { IEnemeis, Pokemon } from "@/types/cards.type";
import { enemyAttackAction } from "./actions-store/enemy-attack";
import { startGameAction } from "./actions-store/start-game";
import { earnCoinsAction } from "./actions-store/earn-coins";
import { upgradePokemonAction } from "./actions-store/upgrade-pokemon";
import { earnWinCoinsAction } from "./actions-store/earn-win-coins";
import { selectDifficultAction } from "./actions-store/select-difficult";
import { loadingGameAction } from "./actions-store/loading-game";
import { loadingPokemonsAction } from "./actions-store/loading-pokemons";
// import { persist } from "zustand/middleware";

const useDifficultStore = create<IEnemyDifficult>()(
    (set, get) => ({
        enemies: ENEMIES,
        difficultSelected: 'easy',
        startedDiff: ENEMIES.find(p => p.started === true) as IEnemeis,
        selectDifficult: (difficult: string) => set(selectDifficultAction(get, difficult)),
        unlockDifficult: (difficult: string) => set({enemies: get().enemies.map(e => difficult === e.difficult ? {...e, purchased: !e.purchased} : e)})
    })
)

// const startedDiff = useDifficultStore.getState().startedDiff

const usePokemonsStore = create<IPokemonsStore>()(
    (set, get) => ({
        pokemons: POKEMONS,
        pokecoins: 0,
        pokemonSelected: 1,
        startedPokemon: POKEMONS.find(p => p.started === true) as Pokemon,
        selectPokemon: (pokemonNumber: number) => set(selectPokemonAction(get, pokemonNumber)),
        earnCoinsAfterAttack: (coins: number, enemyHP: number) => set(earnCoinsAction(get, set, coins, enemyHP)),
        earnCoinsAfterWin: () => set(earnWinCoinsAction(get, set, useDifficultStore.getState().startedDiff.reward as number)),
        spendCoins: (pokemonCost: number) => set({ pokecoins: get().pokecoins -= pokemonCost }),
        unlockPokemon: (pokemonNumber: number) => set({pokemons: get().pokemons.map(p => pokemonNumber === p.number ? {...p, purchased: !p.purchased} : p)}),
        upgradePokemon: (pokemonNumber: number, stage: number) => set(upgradePokemonAction(get, stage, pokemonNumber))
    }),
)

const startedPokemon = usePokemonsStore.getState().startedPokemon

const initialGameSettings = {
    deck: ENERGY,
    // Настройки выбранного игрового покемона
    playerPokemonType: startedPokemon.type,
    playerEnergy: [],
    playerEnergyLength: startedPokemon.energyLength,
    playerAttackPower: startedPokemon.attackPower,
    playerHP: startedPokemon.hp,
    // Настройки выбранной сложности
    enemyTurnCount: 0,
    indicateTurn: 0,
    enemyPokemonType: "",
    enemyEnergy: [],
    enemyEnergyLength: 0,
    enemyAttackPower: 0,
    enemyHP: 0,
    // Общие настройки игры
    energyBox: [],
    isAttack: false,
    isPlayerAttacked: false,
    isEnemyAttacked: false,
    isGameEnd: false,
    isLose: false,
    isWin: false,
}

const useGameStore = create<IGameStore>()(
    (set, get) => ({
        ...initialGameSettings,
        isLoading: true,
        error: null,
        randomEnemy: 0,
        enemyTakedEnergy: false,
        changeEnemy: () => set({randomEnemy: Math.floor(Math.random() * (4 - 0) + 0)}),
        loadingGame: (timeout: number) => set(loadingGameAction(set, get, timeout)),
        loadingPokemons: async (timeout: number) => set(await loadingPokemonsAction(get, timeout)),
        startGame: (pokemonNumber: number) => set(startGameAction(pokemonNumber, get().randomEnemy, useDifficultStore.getState().difficultSelected as string, usePokemonsStore.getState().pokemons,  useDifficultStore.getState().enemies, initialGameSettings)),
        takeEnergy: (id: number, indicateEnemy: number, startedDiff: IEnemeis) => set(takeEnergyAction(set, get, id, get().randomEnemy, startedDiff, indicateEnemy)),
        giveEnergy: (id: number) => set(giveEnergyAction(get, id)),
        playerAttack: () => set(playerAttackAction(set, get)),
        enemyAttack: () => set(enemyAttackAction(set, get)),
        gameOver: () => set(gameOverAction(get)),
        gameExit: () => setTimeout(() => set({ isWin: false, isGameEnd: false, isLose: false }), 450) 
    }),
)

export { useGameStore, usePokemonsStore, useDifficultStore }