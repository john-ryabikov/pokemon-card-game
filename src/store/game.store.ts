import { create } from "zustand"
import { ENERGY } from "@/data/energy.cards"
import { POKEMONS } from "@/data/pokemons.cards"
import { ENEMIES } from "@/data/enemies.cards"

import type { IEnemyDifficult, IGameMana, IGameStore, IPokemonsStore } from "./game.types";

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
import { changeFirstAction } from "./actions-store/change-first";
import { deleteFirstAction } from "./actions-store/delete-first";
import { deleteManaAction } from "./actions-store/delete-mana";
import { addManaAction } from "./actions-store/add-mana";
import { startTimerAction } from "./actions-store/start-timer";
import { resetTimerAction } from "./actions-store/reset-timer";
// import { persist } from "zustand/middleware";

const useGameMana = create<IGameMana>()(
    // persist(
        (set, get) => ({
            mana: 10,
            maxMana: 10,
            timer: null,
            isEnoughMana: false,
            lastTime: 0,
            deleteMana: () => deleteManaAction(set, get),
            addMana: () => addManaAction(set, get),
            startTimer: () => startTimerAction(set, get),
            resetTimer: () => resetTimerAction(set, get),
            stopTimer: () => set({ timer: null })
        }),
        // {name: "mana-timer"}
    // )
)    

const useDifficultStore = create<IEnemyDifficult>()(
    // persist(
        (set, get) => ({
            enemies: ENEMIES,
            difficultSelected: 'easy',
            startedDiff: ENEMIES.find(p => p.started === true) as IEnemeis,
            selectDifficult: (difficult: string) => set(selectDifficultAction(get, difficult)),
            unlockDifficult: (difficult: string) => set({enemies: get().enemies.map(e => difficult === e.difficult ? {...e, purchased: !e.purchased} : e)})
        }),
        // {name: "difficult-game"}
    // ) 
)

const usePokemonsStore = create<IPokemonsStore>()(
    // persist(
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
        // {name: "store-game"}
    // )
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
    isGameEnd: false,
    isLose: false,
    isWin: false,
    isAttack: false,
    isPlayerAttacked: false,
    isEnemyAttacked: false
}

const useGameStore = create<IGameStore>()(
    // persist(
        (set, get) => ({
            ...initialGameSettings,
            isSounds: true,
            isLoading: false,
            isFirstOpen: false,
            isFirstOpenStore: false,
            isFirstOpenBoard: false,
            isFirstOpenDiff: false,
            isAuthorOpen: false,
            isPlayerTurn: false,
            error: null,
            randomEnemy: 0,
            enemyTakedEnergy: false,
            changeFirst: (firsted: string) => changeFirstAction(set, firsted),
            deleteFirst: (firsted: string) => deleteFirstAction(set, firsted),
            changeEnemy: () => set({randomEnemy: Math.floor(Math.random() * (4 - 0) + 0)}),
            loadingGame: (media: string[]) => loadingGameAction(set, get, media),
            loadingPokemons: async (timeout: number) => set(await loadingPokemonsAction(get, timeout)),
            startGame: (pokemonNumber: number) => set(startGameAction(pokemonNumber, get().randomEnemy, useDifficultStore.getState().difficultSelected as string, usePokemonsStore.getState().pokemons, useDifficultStore.getState().enemies, initialGameSettings)),
            takeEnergy: (id: number, indicateEnemy: number, startedDiff: IEnemeis) => set(takeEnergyAction(set, get, id, get().randomEnemy, startedDiff, indicateEnemy)),
            giveEnergy: (id: number) => set(giveEnergyAction(get, id)),
            playerAttack: () => set(playerAttackAction(set, get)),
            enemyAttack: () => set(enemyAttackAction(set, get)),
            gameOver: () => set(gameOverAction(get)),
            gameExit: () => setTimeout(() => set({ isWin: false, isGameEnd: false, isLose: false }), 450),
            changeSounds: () => set({isSounds: !get().isSounds}) 
        }),
        // {name: "settings-game"}
    // )
)

export { useGameStore, usePokemonsStore, useDifficultStore, useGameMana }