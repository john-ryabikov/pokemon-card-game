import { create } from "zustand";
import { ENERGY } from "@/data/energy.cards";
import { POKEMONS } from "@/data/pokemons.cards";

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

const usePokemonsStore = create<IPokemonsStore>((set, get) => ({
    pokemons: POKEMONS,
    pokemonSelected: 1,
    startedPokemon: POKEMONS.find(p => p.started === true) as Pokemon,
    selectPokemon: (pokemonNumber: number) => set(selectPokemonAction(get, pokemonNumber)),
}))

const initialGameSettings = {
    deck: ENERGY,
    playerPokemonType: usePokemonsStore.getState().startedPokemon.type,
    playerEnergy: [],
    playerEnergyLength: usePokemonsStore.getState().startedPokemon.energyLength,
    playerAttackPower: usePokemonsStore.getState().startedPokemon.attackPower,
    playerHP: usePokemonsStore.getState().startedPokemon.hp,
    enemyTurnCount: 0,
    enemyEnergy: [],
    enemyAttackPower: POKEMONS[6].attackPower,
    enemyEnergyLength: POKEMONS[6].energyLength,
    enemyHP: POKEMONS[6].hp,
    energyBox: [],
    isGameEnd: false,
    isLose: false,
    isWin: false,
    isAttack: false,
    isPlayerAttacked: false,
    isEnemyAttacked: false,
}

const useGameStore = create<IGameStore>((set, get) => ({
    ...initialGameSettings,
    isLoading: false,
    error: null,
    loadingPokemons: async (timeout: number) => set(await loadingPokemonsAction(get, timeout)),
    startGame: (pokemonNumber: number) => set(startGameAction(pokemonNumber, POKEMONS, initialGameSettings)),
    takeEnergy: (id: number) => set(takeEnergyAction(get, id)),
    giveEnergy: (id: number) => set(giveEnergyAction(get, id)),
    playerAttack: () => set(playerAttackAction(set, get)),
    enemyAttack: () => set(enemyAttackAction(set, get)),
    gameOver: () => set(gameOverAction(get)) 
}))

export { useGameStore, usePokemonsStore }