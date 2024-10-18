import { IGameMana } from "../game.types";

export const addManaAction = (
    set: (partial: IGameMana | Partial<IGameMana> | ((state: IGameMana) => IGameMana | Partial<IGameMana>), replace?: boolean | undefined) => void,
    get: () => IGameMana
) => {

    const state = get()

    const nowDate = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate(),
        new Date().getHours(),
        new Date().getMinutes(),
        new Date().getSeconds()
    )

    const diff = (nowDate.getTime() - state.lastTime) / (1000 * 60)

    if (diff < 10) set({
        timer: setInterval(() => {
            set({ mana: state.mana += 1 })
            if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
        }, 60000 * 10)
    })
    if (diff >= 10 && diff < 20) set({
        mana: state.mana += 1,
        lastTime: nowDate.getTime(),
        timer: setInterval(() => {
            set({ mana: state.mana += 1 })
            if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
        }, 60000 * 10)
    })
    if (diff >= 20 && diff < 30) set({
        mana: state.mana += 2,
        lastTime: nowDate.getTime(),
        timer: setInterval(() => {
            set({ mana: state.mana += 1 })
            if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
        }, 60000 * 10)
    })
    if (diff >= 30 && diff < 40) set({
        mana: state.mana += 3,
        lastTime: nowDate.getTime(),
        timer: setInterval(() => {
            set({ mana: state.mana += 1 })
            if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
        }, 60000 * 10)
    })
    if (diff >= 40 && diff < 50) set({
        mana: state.mana += 4,
        lastTime: nowDate.getTime(),
        timer: setInterval(() => {
            set({ mana: state.mana += 1 })
            if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
        }, 60000 * 10)
    })
    if (diff >= 50 && diff < 60) set({
        mana: state.mana += 5,
        lastTime: nowDate.getTime(),
        timer: setInterval(() => {
            set({ mana: state.mana += 1 })
            if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
        }, 60000 * 10)
    })
    if (diff >= 60 && diff < 70) set({
        mana: state.mana += 6,
        lastTime: nowDate.getTime(),
        timer: setInterval(() => {
            set({ mana: state.mana += 1 })
            if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
        }, 60000 * 10)
    })
    if (diff >= 70 && diff < 80) set(
        {mana: state.mana += 7,
        lastTime: nowDate.getTime(),
        timer: setInterval(() => {
            set({ mana: state.mana += 1 })
            if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
        }, 60000 * 10)
        })
    if (diff >= 80 && diff < 90) set({
        mana: state.mana += 8,
        lastTime: nowDate.getTime(),
        timer: setInterval(() => {
            set({ mana: state.mana += 1 })
            if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
        }, 60000 * 10)
    })
    if (diff >= 90 && diff < 100) set({
        mana: state.mana += 9,
        lastTime: nowDate.getTime(),
        timer: setInterval(() => {
            set({ mana: state.mana += 1 })
            if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
        }, 60000 * 10)
    })
    if (diff > 100) set({
        mana: 10,
        lastTime: 0,
        timer: null
    })

}