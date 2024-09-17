import { create } from "zustand";
import { ENERGY } from "@/data/energy.cards";
import { POKEMONS } from "@/data/pokemons.cards";

import type { IGameStore } from "./game.types";

import { gameOverAction } from "./actions-store/game-over";
import { takeEnergyAction } from "./actions-store/take-energy";
import { giveEnergyAction } from "./actions-store/give-energy";
import { attackAction } from "./actions-store/attack";

const initialGameSettings = {
    deck: ENERGY,
    playerPokrmonType: POKEMONS[0].type,
    playerEnergy: POKEMONS[0].energy,
    playerEnergyLength: POKEMONS[0].energyLength,
    playerAttackPower: POKEMONS[0].attackPower,
    playerHP: POKEMONS[0].hp,
    enemyHP: POKEMONS[1].hp,
    energyBox: [],
    isGameEnd: false,
    isLose: false,
    isWin: false,
    isAttack: false,
    isAttacked: false,
}

const useGameStore = create<IGameStore>((set, get) => ({
    ...initialGameSettings,
    startGame: () => set(initialGameSettings),
    takeEnergy: (id: number) => set(takeEnergyAction(get, id)),
    giveEnergy: (id: number) => set(giveEnergyAction(get, id)),
    attack: () => {set(attackAction(set, get))},
    gameOver: () => set(gameOverAction(get)) 
}))

export { useGameStore }