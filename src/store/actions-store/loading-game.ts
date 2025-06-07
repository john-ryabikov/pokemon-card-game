import type { IGameStore } from "../game.types";

// const loadAudio = async (url: string, res: () => void) => {
//     const audio = new Audio()
//     audio.src = url
//     audio.oncanplay = () => res()
// };

export const loadingGameAction = async (
    set: (partial: IGameStore | Partial<IGameStore> | ((state: IGameStore) => IGameStore | Partial<IGameStore>), replace?: boolean | undefined) => void,
    get: () => IGameStore
) => {

    const state = get()

    set({ isLoading: true })

    // const promises = media.map((a) => new Promise<void>(async (resolve) => await loadAudio(a, resolve)))

    // await Promise.all(promises).then((res) => res && set({ isLoading: false }))

    setTimeout(() => set({ isLoading: false }), 3000)

    if (state.isFirstOpen !== null && !state.isLoading) setTimeout(() => state.changeFirst('start-open'), 1000)

} 