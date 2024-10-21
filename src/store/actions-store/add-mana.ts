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

    const addManaToMax = (mana: number) => {
        switch (mana) {
            case 9:
                set({ mana: state.mana += 1 });
            break;
            case 8:
                set({ mana: state.mana += 2 });
            break;
            case 7:
                set({ mana: state.mana += 3 });
            break;
            case 6:
                set({ mana: state.mana += 4 });
            break;
            case 5:
                set({ mana: state.mana += 5 });
            break;
            case 4:
                set({ mana: state.mana += 6 });
            break;
            case 3:
                set({ mana: state.mana += 7 });
            break;
            case 2:
                set({ mana: state.mana += 8 });
            break;
            case 1:
                set({ mana: state.mana += 9 });
            break;
        }
    }

    const addManaAfterTime = (
        contMana: number,                                                                             
    ) => {
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
    }

    // Проходит меньше 10 минут

    if (diff < 10) set({
        timer: setInterval(() => {
            set({ mana: state.mana += 1 })
            if (state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
        }, 60000 * 10)
    })

    // Проходит больше 10 минут

    if (diff >= 10 && diff < 20) {
        if (state.mana + 1 === state.maxMana) {
            set({ mana: state.mana += 1, lastTime: 0, timer: null })
        } else set({
            mana: state.mana += 1,
            lastTime: nowDate.getTime(),
            timer: setInterval(() => {
                set({ mana: state.mana += 1 })
                if (state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
            }, 60000 * 10)
        })
    }
    if (diff >= 20 && diff < 30) addManaAfterTime(2) // Проходит больше 20 минут
    if (diff >= 30 && diff < 40) addManaAfterTime(3) // Проходит больше 30 минут
    if (diff >= 40 && diff < 50) addManaAfterTime(4) // Проходит больше 40 минут
    if (diff >= 50 && diff < 60) addManaAfterTime(5) // Проходит больше 50 минут
    if (diff >= 60 && diff < 70) addManaAfterTime(6) // Проходит больше 60 минут
    if (diff >= 70 && diff < 80) addManaAfterTime(7) // Проходит больше 70 минут
    if (diff >= 80 && diff < 90) addManaAfterTime(8) // Проходит больше 80 минут

    // Проходит больше 90 минут

    if (diff >= 90 && diff < 100) {
        if (state.mana + 9 > state.maxMana) {
            addManaToMax(state.mana)
            set({ lastTime: 0, timer: null})
        } else if (state.mana + 9 === state.maxMana) set({ mana: state.mana += 9, lastTime: 0, timer: null})
    }

    // Проходит больше 100 минут

    if (diff > 100) set({ mana: 10, lastTime: 0, timer: null })
}
