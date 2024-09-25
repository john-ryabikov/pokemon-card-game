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
import { persist } from "zustand/middleware";

const usePokemonsStore = create<IPokemonsStore>()(
    persist(
        (set, get) => ({
            pokemons: POKEMONS,
            pokecoins: 0,
            pokemonSelected: 1,
            startedPokemon: POKEMONS.find(p => p.started === true) as Pokemon,
            selectPokemon: (pokemonNumber: number) => set(selectPokemonAction(get, pokemonNumber)),
            earnCoinsAfterAttack: (coins: number) => set(earnCoinsAction(get, set, coins)),
            earnCoinsAfterWin: (coins: number) => set(earnCoinsAction(get, set, coins)),
            spendCoins: (pokemonCost: number) => set({ pokecoins: get().pokecoins -= pokemonCost }),
            unlockPokemon: (pokemonNumber: number) => set({
                pokemons: get().pokemons.map(p => pokemonNumber === p.number ? {...p, purchased: !p.purchased} : p),
            }),
        }),
        { name: "Pokemon-store" }
    )
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
    isGameEnd: false,
    isLose: false,
    isWin: false,
    isAttack: false,
    isPlayerAttacked: false,
    isEnemyAttacked: false,
}

const useGameStore = create<IGameStore>()(
    persist(
        (set, get) => ({
            ...initialGameSettings,
            isLoading: false,
            error: null,
            enemyTakedEnergy: false,
            loadingPokemons: async (timeout: number) => set(await loadingPokemonsAction(get, timeout)),
            startGame: (pokemonNumber: number) => set(startGameAction(pokemonNumber, POKEMONS, initialGameSettings)),
            takeEnergy: (id: number) => set(takeEnergyAction(set, get, id)),
            giveEnergy: (id: number) => set(giveEnergyAction(get, id)),
            playerAttack: () => set(playerAttackAction(set, get)),
            enemyAttack: () => set(enemyAttackAction(set, get)),
            gameOver: () => set(gameOverAction(get)) 
        }),
        { name: "Pokemon Game" }
    )
)

export { useGameStore, usePokemonsStore }