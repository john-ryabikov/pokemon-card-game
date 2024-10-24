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

    const addManaToMax = (mana: number) => set({ mana: state.mana += state.maxMana - mana })

    const addManaAfterTime = (contMana: number) => {
        switch (contMana) {
            case 0:
                set({
                    timer: setInterval(() => {
                        set({ mana: state.mana += 1 })
                        if (state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
                    }, 60000 * 10)
                })
            break;    
            case 1:
                if (state.mana + contMana === state.maxMana) {
                    set({ mana: state.mana += contMana, lastTime: 0, timer: null })
                } else set({
                    mana: state.mana += contMana,
                    lastTime: nowDate.getTime(),
                    timer: setInterval(() => {
                        set({ mana: state.mana += 1 })
                        if (state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
                    }, 60000 * 10)
                })
            break;
            default:
                if (state.mana + contMana > state.maxMana) {
                  addManaToMax(state.mana)
                  set({ lastTime: 0, timer: null })
                } else if (state.mana + contMana === state.maxMana) {
                  set({ mana: state.mana += contMana, lastTime: 0, timer: null })
                } else set({
                  mana: state.mana += contMana,
                  lastTime: nowDate.getTime(),
                  timer: setInterval(() => {
                    set({ mana: state.mana += 1 })
                    if (state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
                  }, 60000 * 10)
                })
            break;    
        }
    }
    
    if (diff < 10) addManaAfterTime(0) // Проходит меньше 10 минут
    if (diff >= 10 && diff < 20) addManaAfterTime(1) // Проходит больше 10 минут
    if (diff >= 20 && diff < 30) addManaAfterTime(2) // Проходит больше 20 минут
    if (diff >= 30 && diff < 40) addManaAfterTime(3) // Проходит больше 30 минут
    if (diff >= 40 && diff < 50) addManaAfterTime(4) // Проходит больше 40 минут
    if (diff >= 50 && diff < 60) addManaAfterTime(5) // Проходит больше 50 минут
    if (diff >= 60 && diff < 70) addManaAfterTime(6) // Проходит больше 60 минут
    if (diff >= 70 && diff < 80) addManaAfterTime(7) // Проходит больше 70 минут
    if (diff >= 80 && diff < 90) addManaAfterTime(8) // Проходит больше 80 минут
    if (diff >= 90 && diff < 100) addManaAfterTime(9) // Проходит больше 90 минут
    if (diff > 100) set({ mana: 10, lastTime: 0, timer: null }) // Проходит больше 100 минут
}
