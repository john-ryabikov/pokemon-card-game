import { create } from "zustand";
import { ENERGY } from "@/data/energy.cards";
import { POKEMONS } from "@/data/pokemons.cards";

import type { IGameStore, IPokemonsStore } from "./game.types";

import { gameOverAction } from "./actions-store/game-over";
import { takeEnergyAction } from "./actions-store/take-energy";
import { giveEnergyAction } from "./actions-store/give-energy";
import { attackAction } from "./actions-store/attack";
import { selectPokemonAction } from "./actions-store/select-pokemon";

const initialGameSettings = {
    deck: ENERGY,
    enemyHP: POKEMONS[6].hp,
    energyBox: [],
    isGameEnd: false,
    isLose: false,
    isWin: false,
    isAttack: false,
    isAttacked: false,
    isLoading: false
}

const usePokemonsStore = create<IPokemonsStore>(() => ({
    pokemons: POKEMONS,
    startedPokemon: POKEMONS[0]
}))

const useGameStore = create<IGameStore>((set, get) => ({
    ...initialGameSettings,
    pokemonSelected: 1,
    playerPokemon: usePokemonsStore.getState().startedPokemon.pokemonImg,
    playerPokemonType: usePokemonsStore.getState().startedPokemon.type,
    playerEnergy: usePokemonsStore.getState().startedPokemon.energy,
    playerEnergyLength: usePokemonsStore.getState().startedPokemon.energyLength,
    playerAttackPower: usePokemonsStore.getState().startedPokemon.attackPower,
    playerHP: usePokemonsStore.getState().startedPokemon.hp,
    playerAttackEffect: usePokemonsStore.getState().startedPokemon.attackEffect,
    startGame: () => set(initialGameSettings),
    selectPokemon: (pokemonNumber: number) => set(selectPokemonAction(get, POKEMONS, pokemonNumber)),
    takeEnergy: (id: number) => set(takeEnergyAction(get, id)),
    giveEnergy: (id: number) => set(giveEnergyAction(get, id)),
    attack: () => set(attackAction(set, get)),
    gameOver: () => set(gameOverAction(get)) 
}))

export { useGameStore, usePokemonsStore }