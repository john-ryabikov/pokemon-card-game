import type { IGameStore } from "../game.types";

const loadAudio = (url: string, res: () => void) => {
    const audio = new Audio();
    audio.src = url;
    audio.oncanplaythrough = () => res();
    audio.onerror = () => res();
};

export const loadingGameAction = (
    set: (partial: IGameStore | Partial<IGameStore> | ((state: IGameStore) => IGameStore | Partial<IGameStore>), replace?: boolean | undefined) => void,
    timeout: number,
    media: string[]
) => {

    set({ isLoading: true })
    
    const promises = media.map((a) => new Promise<void>((res, _rej) => loadAudio(a, res)))
    Promise.all(promises)

    setTimeout(() => set({ isLoading: false }), timeout)

} 