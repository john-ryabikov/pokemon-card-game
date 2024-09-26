import { create } from "zustand";
import { ENERGY } from "@/data/energy.cards";
import { ENEMIES, POKEMONS } from "@/data/pokemons.cards";

import type { IGameStore, IPokemonsStore } from "./game.types";

import { gameOverAction } from "./actions-store/game-over";
import { takeEnergyAction } from "./actions-store/take-energy";
import { giveEnergyAction } from "./actions-store/give-energy";
import { playerAttackAction } from "./actions-store/player-attack";
import { selectPokemonAction } from "./actions-store/select-pokemon";
import { Pokemon } from "@/types/cards.type";
import { loadingPokemonsAction } from "./actions-store/loading-pokemons";
import { enemyAttackAction } from "./actions-store/enemy-attack";
import { startGameAction } from "./actions-store/start-game";
import { earnCoinsAction } from "./actions-store/earn-coins";
import { upgradePokemonAction } from "./actions-store/upgrade-pokemon";
import { earnWinCoinsAction } from "./actions-store/earn-win-coins";
// import { persist } from "zustand/middleware";

const usePokemonsStore = create<IPokemonsStore>()(
    (set, get) => ({
        pokemons: POKEMONS,
        pokecoins: 0,
        pokemonSelected: 1,
        startedPokemon: POKEMONS.find(p => p.started === true) as Pokemon,
        selectPokemon: (pokemonNumber: number) => set(selectPokemonAction(get, pokemonNumber)),
        earnCoinsAfterAttack: (coins: number, enemyHP: number) => set(earnCoinsAction(get, set, coins, enemyHP)),
        earnCoinsAfterWin: (coins: number) => set(earnWinCoinsAction(get, set, coins)),
        spendCoins: (pokemonCost: number) => set({ pokecoins: get().pokecoins -= pokemonCost }),
        unlockPokemon: (pokemonNumber: number) => set({
            pokemons: get().pokemons.map(p => pokemonNumber === p.number ? {...p, purchased: !p.purchased} : p),
        }),
        upgradePokemon: (pokemonNumber: number, stage: number) => set(upgradePokemonAction(get, stage, pokemonNumber))
    }),
)

const initialGameSettings = {
    deck: ENERGY,
    playerPokemonType: usePokemonsStore.getState().startedPokemon.type,
    playerEnergy: [],
    playerEnergyLength: usePokemonsStore.getState().startedPokemon.energyLength,
    playerAttackPower: usePokemonsStore.getState().startedPokemon.attackPower,
    playerHP: usePokemonsStore.getState().startedPokemon.hp,
    enemyTurnCount: 0,
    enemyEnergy: [],
    enemyAttackPower: ENEMIES[0].attackPower,
    enemyEnergyLength: ENEMIES[0].energyLength,
    enemyHP: ENEMIES[0].hp,
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
        isLoading: false,
        error: null,
        enemyTakedEnergy: false,
        loadingPokemons: async (timeout: number) => set(await loadingPokemonsAction(get, timeout)),
        startGame: (pokemonNumber: number) => set(startGameAction(pokemonNumber, usePokemonsStore.getState().pokemons, initialGameSettings)),
        takeEnergy: (id: number) => set(takeEnergyAction(set, get, id)),
        giveEnergy: (id: number) => set(giveEnergyAction(get, id)),
        playerAttack: () => set(playerAttackAction(set, get)),
        enemyAttack: () => set(enemyAttackAction(set, get)),
        gameOver: () => set(gameOverAction(get)),
        gameExit: () => setTimeout(() => set({ isWin: false, isGameEnd: false, isLose: false }), 450) 
    }),
)

export { useGameStore, usePokemonsStore }