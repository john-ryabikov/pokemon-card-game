import type { Energy, TypeEnergies } from "@/types/cards.type";

export interface IGameStore {
    deck: Energy[],
    playerPokrmonType: TypeEnergies,
    playerEnergy: Energy[],
    playerEnergyLength: number,
    playerAttackPower: number,
    playerHP: number,
    enemyHP: number,
    energyBox: Energy[],
    isGameEnd: boolean,
    isLose: boolean,
    isWin: boolean,
    isAttack: boolean,
    isAttacked: boolean,
    startGame: () => void,
    takeEnergy: (id: number) => void,
    giveEnergy: (id: number) => void,
    attack: () => void
    gameOver: () => void,
    
    
}