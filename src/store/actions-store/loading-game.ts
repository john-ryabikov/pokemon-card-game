import type { IGameStore } from "../game.types";
// import { audios } from "@/data/audio..sfx";

const loadAudio = (url: string, res: () => void) => {
    const audio = new Audio();
    audio.src = url;
    audio.onload = () => res();
    audio.onerror = () => res();
};

export const loadingGameAction = (
    set: (partial: IGameStore | Partial<IGameStore> | ((state: IGameStore) => IGameStore | Partial<IGameStore>), replace?: boolean | undefined) => void,
    timeout: number,
    media: string[]
) => {

    set({ isLoading: true })

    setTimeout(() => {
        const promises = media.map((a) => new Promise<void>(async (res, _rej) => loadAudio(a, res)))
        Promise.all(promises)
        set({ isLoading: false })
    }, timeout)

} 