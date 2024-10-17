import { IGameMana } from "../game.types";

export const deleteManaAction = (
    set: (partial: IGameMana | Partial<IGameMana> | ((state: IGameMana) => IGameMana | Partial<IGameMana>), replace?: boolean | undefined) => void,
    get: () => IGameMana
) => {

    const state = get()

    const lastDate = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate(),
        new Date().getHours(),
        new Date().getMinutes(),
        new Date().getSeconds()
    )

    if (state.mana !== 0) {
        set({ 
            mana: state.mana - 1,
            lastTime: lastDate.getTime()
        })
    }

}