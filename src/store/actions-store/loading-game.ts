import type { IGameStore } from "../game.types";

const loadAudio = (url: string, res: () => void) => {
    const audio = new Audio();
    audio.src = url;
    audio.oncanplaythrough = () => res();
    audio.onerror = () => res();
};

export const loadingGameAction = async (
    set: (partial: IGameStore | Partial<IGameStore> | ((state: IGameStore) => IGameStore | Partial<IGameStore>), replace?: boolean | undefined) => void,
    timeout: number,
    media: string[]
) => {

    set({ isLoading: true })

    const promises = media.map((a) => new Promise<void>(async (res, _rej) => loadAudio(a, res)))

    await Promise.all(promises).then((res) => {
        try {
            res && setTimeout(() => set({ isLoading: false }), timeout)
            return
        } catch (error) {
            console.log(error)
            return
        }
    })

    // setTimeout(() => {
    //     Promise.all(promises)
    //     set({ isLoading: false })
    // }, timeout)

} 