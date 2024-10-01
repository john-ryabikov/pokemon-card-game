import type { IEnemeis } from "@/types/cards.type";
import type { IEnemyDifficult } from "../game.types";

export const selectDifficultAction = ( get: () => IEnemyDifficult, difficult: string ): Partial<IEnemyDifficult> => {

    const state = get()

    const selectedDiff = state.enemies.find(p => p.difficult === difficult) as IEnemeis

    state.startedDiff = selectedDiff
    state.difficultSelected = selectedDiff.difficult

    return {
        startedDiff: state.startedDiff, 
        difficultSelected: state.difficultSelected
    }

}