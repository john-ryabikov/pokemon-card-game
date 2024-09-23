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

const usePokemonsStore = create<IPokemonsStore>(() => ({
    pokemons: POKEMONS,
    startedPokemon: POKEMONS.find(p => p.started === true) as Pokemon,
}))

const initialGameSettings = {
    deck: ENERGY,
    playerEnergy: [],
    enemyTurnCount: 0,
    enemyEnergy: [],
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
    enemyAttackPower: POKEMONS[6].attackPower,
    enemyEnergyLength: POKEMONS[6].energyLength,
    pokemonSelected: 1,
    playerPokemon: usePokemonsStore.getState().startedPokemon.pokemonImg,
    playerPokemonType: usePokemonsStore.getState().startedPokemon.type,
    playerEnergy: usePokemonsStore.getState().startedPokemon.energy,
    playerEnergyLength: usePokemonsStore.getState().startedPokemon.energyLength,
    playerAttackPower: usePokemonsStore.getState().startedPokemon.attackPower,
    playerAttackEffect: usePokemonsStore.getState().startedPokemon.attackEffect,
    playerHP: usePokemonsStore.getState().startedPokemon.hp,
    loadingPokemons: async (timeout: number) => set(await loadingPokemonsAction(get, timeout)),
    startGame: (pokemonNumber: number) => set(state => {
        const currentPokemon = POKEMONS.find(p => p.number === pokemonNumber) as Pokemon
        state.playerHP = currentPokemon.hp
        return {
            ...initialGameSettings,
            playerHP: state.playerHP
        }
    }),
    selectPokemon: (pokemonNumber: number) => set(selectPokemonAction(get, POKEMONS, pokemonNumber)),
    takeEnergy: (id: number) => set(takeEnergyAction(get, id)),
    giveEnergy: (id: number) => set(giveEnergyAction(get, id)),
    playerAttack: () => set(playerAttackAction(set, get)),
    enemyAttack: () => set(enemyAttackAction(set, get)),
    gameOver: () => set(gameOverAction(get)) 
}))

export { useGameStore, usePokemonsStore }