import type { IGameStore } from "../game.types";

export const changeFirstAction = (
    set: (partial: IGameStore | Partial<IGameStore> | ((state: IGameStore) => IGameStore | Partial<IGameStore>), replace?: boolean | undefined) => void,
    firsted: string
) => {

    switch (firsted) {
        case 'store-open':
            set({isFirstOpenStore: true})
        break;
        case 'board-open':
            set({isFirstOpenBoard: true})
        break;
        case 'diff-open':
            set({isFirstOpenDiff: true})
        break;
        case 'start-open':
            set({isFirstOpen: true})
        break         
    }
} 