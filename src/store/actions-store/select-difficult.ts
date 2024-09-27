import type { Pokemon } from "@/types/cards.type";
import type { IEnemyDifficult } from "../game.types";

export const selectDifficultAction = ( get: () => IEnemyDifficult, difficult: string ): Partial<IEnemyDifficult> => {

    const state = get()

    const selectedPokemon = state.enemies.find(p => p.difficult === difficult) as Pokemon

    state.startedEnemy = selectedPokemon
    state.difficultSelected = selectedPokemon.difficult

    return {
        startedEnemy: state.startedEnemy,
        difficultSelected: state.difficultSelected
    }

}