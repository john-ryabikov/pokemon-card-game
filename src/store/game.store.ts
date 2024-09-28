import { create } from "zustand";
import { ENERGY } from "@/data/energy.cards";
import { ENEMIES, POKEMONS } from "@/data/pokemons.cards";

import type { IEnemyDifficult, IGameStore, IPokemonsStore } from "./game.types";

import { gameOverAction } from "./actions-store/game-over";
import { takeEnergyAction } from "./actions-store/take-energy";
import { giveEnergyAction } from "./actions-store/give-energy";
import { playerAttackAction } from "./actions-store/player-attack";
import { selectPokemonAction } from "./actions-store/select-pokemon";
import { Pokemon } from "@/types/cards.type";
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
        startedEnemy: ENEMIES.find(p => p.started === true) as Pokemon,
        selectDifficult: (difficult: string) => set(selectDifficultAction(get, difficult)),
        unlockDifficult: (difficult: string) => set({enemies: get().enemies.map(e => difficult === e.difficult ? {...e, purchased: !e.purchased} : e)})
    })
)

const usePokemonsStore = create<IPokemonsStore>()(
    (set, get) => ({
        pokemons: POKEMONS,
        pokecoins: 0,
        pokemonSelected: 1,
        startedPokemon: POKEMONS.find(p => p.started === true) as Pokemon,
        selectPokemon: (pokemonNumber: number) => set(selectPokemonAction(get, pokemonNumber)),
        earnCoinsAfterAttack: (coins: number, enemyHP: number) => set(earnCoinsAction(get, set, coins, enemyHP)),
        earnCoinsAfterWin: () => set(earnWinCoinsAction(get, set, useDifficultStore.getState().startedEnemy.reward as number)),
        spendCoins: (pokemonCost: number) => set({ pokecoins: get().pokecoins -= pokemonCost }),
        unlockPokemon: (pokemonNumber: number) => set({pokemons: get().pokemons.map(p => pokemonNumber === p.number ? {...p, purchased: !p.purchased} : p)}),
        upgradePokemon: (pokemonNumber: number, stage: number) => set(upgradePokemonAction(get, stage, pokemonNumber))
    }),
)



const initialGameSettings = {
    deck: ENERGY,
    // Настройки выбранного игрового покемона
    playerPokemonType: usePokemonsStore.getState().startedPokemon.type,
    playerEnergy: [],
    playerEnergyLength: usePokemonsStore.getState().startedPokemon.energyLength,
    playerAttackPower: usePokemonsStore.getState().startedPokemon.attackPower,
    playerHP: usePokemonsStore.getState().startedPokemon.hp,
    // Настройки выбранной сложности
    enemyTurnCount: 0,
    enemyPokemonType: useDifficultStore.getState().startedEnemy.type,
    enemyEnergy: [],
    enemyEnergyLength: useDifficultStore.getState().startedEnemy.energyLength,
    enemyAttackPower: useDifficultStore.getState().startedEnemy.attackPower,
    enemyHP: useDifficultStore.getState().startedEnemy.hp,
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
        enemyTakedEnergy: false,
        loadingGame: (timeout: number) => set(loadingGameAction(set, get, timeout)),
        loadingPokemons: async (timeout: number) => set(await loadingPokemonsAction(get, timeout)),
        startGame: (pokemonNumber: number, difficult: string) => set(startGameAction(pokemonNumber, difficult, usePokemonsStore.getState().pokemons, useDifficultStore.getState().enemies, initialGameSettings)),
        takeEnergy: (id: number) => set(takeEnergyAction(set, get, id, useDifficultStore.getState().startedEnemy.type, useDifficultStore.getState().startedEnemy.forCountTurn as number)),
        giveEnergy: (id: number) => set(giveEnergyAction(get, id)),
        playerAttack: () => set(playerAttackAction(set, get)),
        enemyAttack: () => set(enemyAttackAction(set, get)),
        gameOver: () => set(gameOverAction(get)),
        gameExit: () => setTimeout(() => set({ isWin: false, isGameEnd: false, isLose: false }), 450) 
    }),
)

export { useGameStore, usePokemonsStore, useDifficultStore }