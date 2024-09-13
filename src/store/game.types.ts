import type { Energy } from "@/types/cards.type";

export interface IGameStore {
    deck: Energy[],
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
    startGame: () => void,
    takeEnergy: (id: number) => void,
    gameOver: () => void,
    giveEnergy: (id: number) => void,
    attackAction: () => void
}