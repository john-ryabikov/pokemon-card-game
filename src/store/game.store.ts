import { create } from "zustand";
import { ENERGY } from "@/data/pokemons.cards";
import { POKEMONS } from "@/data/pokemons.cards";
import { IGameStore } from "./game.types";
import { Energy } from "@/types/cards.type";

const initialGameSettings: Pick<
    IGameStore, 
    "deck" | 
    "playerEnergy" | 
    "playerHP" | 
    "playerEnergyLength" | 
    "playerAttackPower" | 
    "enemyHP" | 
    "energyBox" | 
    "isGameEnd" |
    "isLose" |
    "isWin" | 
    "isAttack"
    > = {
    deck: ENERGY,
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
}

const useGameStore = create<IGameStore>((set) => ({
    ...initialGameSettings,
    startGame: () => set(initialGameSettings),
    takeEnergy: (id: number) => set(state => {
        const energy = state.deck.find(elem => elem.id === id) as Energy
        const energyDeckFiltered = state.deck.filter(elem => {
            if (elem.id !== id) return elem
        })
        return {
            deck: energyDeckFiltered,
            energyBox: [energy, ...state.energyBox]
        }  
    }),
    giveEnergy: (id: number) => set(state => {
        const energy = state.energyBox.find(elem => elem?.id === id) as Energy
        const energyBoxFiltered = state.energyBox.filter(elem => {
            if (elem.id !== id) return elem
        })
        if (state.playerEnergy.length < state.playerEnergyLength && energy.type === "Flame") {
            state.playerEnergy = [...state.playerEnergy, energy]
            if (state.playerEnergy.length === state.playerEnergyLength) {
                return { 
                    energyBox: energyBoxFiltered,
                    isAttack: !state.isAttack
                }
            } else {
                return { 
                    energyBox: energyBoxFiltered,
                }
            }

        } else return state  

    }),
    attackAction: () => set(state => {
        state.enemyHP = state.enemyHP - state.playerAttackPower 
        state.playerEnergy = []
        if (state.enemyHP === 0) {
            return { isWin: true, isGameEnd: true }
        }
        return {
            isAttack: !state.isAttack,
        }
    }),
    gameOver: () => set({isLose: true, isGameEnd: true}) 
}))

export { useGameStore }