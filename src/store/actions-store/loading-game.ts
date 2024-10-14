import type { IGameStore } from "../game.types";

const loadAudio = async (url: string) => {
    const audio = new Audio()
    audio.src = url
};

export const loadingGameAction = async (
    set: (partial: IGameStore | Partial<IGameStore> | ((state: IGameStore) => IGameStore | Partial<IGameStore>), replace?: boolean | undefined) => void,
    get: () => IGameStore,
    media: string[]
) => {

    const state = get()

    set({ isLoading: true })

    const promises = media.map((a) => new Promise(async (resolve) => setTimeout(() => resolve(loadAudio(a)), 3000)))

    await Promise.all(promises)

    set({ isLoading: false })

    if (state.isFirstOpen !== null && !state.isLoading) setTimeout(() => state.changeFirst('start-open'), 1000)

} 