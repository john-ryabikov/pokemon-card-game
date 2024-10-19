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

    const manaCont = (mana: number) => {
        switch (mana) {
            case 9:
                set({ mana: state.mana +=1 });
            break;
            case 8:
                set({ mana: state.mana +=1 });
            break;
            case 7:
                set({ mana: state.mana +=1 });
            break;
            case 6:
                set({ mana: state.mana +=1 });
            break;
            case 5:
                set({ mana: state.mana +=1 });
            break;
            case 4:
                set({ mana: state.mana +=1 });
            break;
            case 3:
                set({ mana: state.mana +=1 });
            break;
            case 2:
                set({ mana: state.mana +=1 });
            break;
        }
    }

    // Проходит меньше 10 минут

    if (diff < 10) set({
        timer: setInterval(() => {
            set({ mana: state.mana += 1 })
            if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
        }, 60000 * 10)
    })

    // Проходит больше 10 минут

    if (diff >= 10 && diff < 20) {
        if (state.mana + 1 === state.maxMana) {
            set({
                mana: state.mana += 1,
                lastTime: 0,
                timer: null
            })
        } else set({
            mana: state.mana += 1,
            lastTime: nowDate.getTime(),
            timer: setInterval(() => {
                set({ mana: state.mana += 1 })
                if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
            }, 60000 * 10)
        })
    }

    // Проходит больше 20 минут

    if (diff >= 20 && diff < 30) {
        if (state.mana + 2 > state.maxMana) {
            set({
                mana: state.mana += 1,
                lastTime: 0,
                timer: null
            })
        } else if (state.mana + 2 === state.maxMana) {
            set({
                mana: state.mana += 2,
                lastTime: 0,
                timer: null
            })
        } else set({
            mana: state.mana += 2,
            lastTime: nowDate.getTime(),
            timer: setInterval(() => {
                set({ mana: state.mana += 1 })
                if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
            }, 60000 * 10)
        })
    }
    
    // Проходит больше 30 минут

    if (diff >= 30 && diff < 40) {
        if (state.mana + 3 > state.maxMana) {
            manaCont(state.mana)
            set({
                lastTime: 0,
                timer: null
            })
        } else if (state.mana + 3 === state.maxMana) {
            set({
                mana: state.mana += 3,
                lastTime: 0,
                timer: null
            })
        } else set({
            mana: state.mana += 3,
            lastTime: nowDate.getTime(),
            timer: setInterval(() => {
                set({ mana: state.mana += 1 })
                if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
            }, 60000 * 10)
        })
    }
    
    // Проходит больше 40 минут

    if (diff >= 40 && diff < 50) {
        if (state.mana + 4 > state.maxMana) {
            manaCont(state.mana)
            set({
                lastTime: 0,
                timer: null
            })
        } else if (state.mana + 4 === state.maxMana) {
            set({
                mana: state.mana += 4,
                lastTime: 0,
                timer: null
            })
        } else set({
            mana: state.mana += 4,
            lastTime: nowDate.getTime(),
            timer: setInterval(() => {
                set({ mana: state.mana += 1 })
                if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
            }, 60000 * 10)
        })
    }

    // Проходит больше 50 минут

    if (diff >= 50 && diff < 60) {
        if (state.mana + 5 > state.maxMana) {
            manaCont(state.mana)
            set({
                lastTime: 0,
                timer: null
            })
        } else if (state.mana + 5 === state.maxMana) {
            set({
                mana: state.mana += 5,
                lastTime: 0,
                timer: null
            })
        } else set({
            mana: state.mana += 5,
            lastTime: nowDate.getTime(),
            timer: setInterval(() => {
                set({ mana: state.mana += 1 })
                if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
            }, 60000 * 10)
        })
    }

    // Проходит больше 60 минут

    if (diff >= 50 && diff < 60) {
        if (state.mana + 5 > state.maxMana) {
            manaCont(state.mana)
            set({
                lastTime: 0,
                timer: null
            })
        } else if (state.mana + 5 === state.maxMana) {
            set({
                mana: state.mana += 5,
                lastTime: 0,
                timer: null
            })
        } else set({
            mana: state.mana += 5,
            lastTime: nowDate.getTime(),
            timer: setInterval(() => {
                set({ mana: state.mana += 1 })
                if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
            }, 60000 * 10)
        })
    }

    // Проходит больше 70 минут

    if (diff >= 50 && diff < 60) {
        if (state.mana + 5 > state.maxMana) {
            manaCont(state.mana)
            set({
                lastTime: 0,
                timer: null
            })
        } else if (state.mana + 5 === state.maxMana) {
            set({
                mana: state.mana += 5,
                lastTime: 0,
                timer: null
            })
        } else set({
            mana: state.mana += 5,
            lastTime: nowDate.getTime(),
            timer: setInterval(() => {
                set({ mana: state.mana += 1 })
                if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
            }, 60000 * 10)
        })
    }

    // Проходит больше 80 минут

    if (diff >= 50 && diff < 60) {
        if (state.mana + 5 > state.maxMana) {
            manaCont(state.mana)
            set({
                lastTime: 0,
                timer: null
            })
        } else if (state.mana + 5 === state.maxMana) {
            set({
                mana: state.mana += 5,
                lastTime: 0,
                timer: null
            })
        } else set({
            mana: state.mana += 5,
            lastTime: nowDate.getTime(),
            timer: setInterval(() => {
                set({ mana: state.mana += 1 })
                if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
            }, 60000 * 10)
        })
    }

    // Проходит больше 90 минут

    if (diff >= 50 && diff < 60) {
        if (state.mana + 5 > state.maxMana) {
            manaCont(state.mana)
            set({
                lastTime: 0,
                timer: null
            })
        } else if (state.mana + 5 === state.maxMana) {
            set({
                mana: state.mana += 5,
                lastTime: 0,
                timer: null
            })
        } else set({
            mana: state.mana += 5,
            lastTime: nowDate.getTime(),
            timer: setInterval(() => {
                set({ mana: state.mana += 1 })
                if(state.mana >= state.maxMana) clearInterval(get().timer as NodeJS.Timeout)
            }, 60000 * 10)
        })
    }

    // Проходит больше 100 минут

    if (diff > 100) set({
        mana: 10,
        lastTime: 0,
        timer: null
    })

}