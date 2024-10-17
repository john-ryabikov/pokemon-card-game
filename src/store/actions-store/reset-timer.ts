import { IGameMana } from "../game.types";

export const resetTimerAction = (
    set: (partial: IGameMana | Partial<IGameMana> | ((state: IGameMana) => IGameMana | Partial<IGameMana>), replace?: boolean | undefined) => void,
    get: () => IGameMana,
) => {

    const state = get()

    set({timer: clearInterval(state.timer as NodeJS.Timeout)})

    set({timer: setInterval(() => {
        set({ mana: state.mana += 1 })
        if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
    }, 60000 * 10)})

}