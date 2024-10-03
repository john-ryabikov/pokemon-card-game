import type { IGameStore } from "../game.types";

export const deleteFirstAction = (
    set: (partial: IGameStore | Partial<IGameStore> | ((state: IGameStore) => IGameStore | Partial<IGameStore>), replace?: boolean | undefined) => void,
    firsted: string
) => {

    switch (firsted) {
        case 'store-closed':
            set({isFirstOpenStore: null})
        break;
        case 'board-closed':
            set({isFirstOpenBoard: null})
        break;
        case 'diff-closed':
            set({isFirstOpenDiff: null})
        break;        
    }
} 