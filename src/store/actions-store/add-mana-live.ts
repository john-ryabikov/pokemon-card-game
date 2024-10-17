import { IGameMana } from "../game.types";

export const addManaLiveAction = (
    set: (partial: IGameMana | Partial<IGameMana> | ((state: IGameMana) => IGameMana | Partial<IGameMana>), replace?: boolean | undefined) => void,
    get: () => IGameMana,
    mana: number
) => {

    const state = get()

    let earnMana: NodeJS.Timeout

    const onAddMana = (mana: number) => {

        let i = mana

        earnMana = setInterval(() => {
            i += 1
            set({ mana: state.mana += 1 })
            if(i >= mana) clearInterval(earnMana)
        }, 15000)
        
    }

    const offAddMana = () => clearInterval(earnMana)

    switch (mana) {
        case 10:
            onAddMana(mana)
        break;
        case 9:
            offAddMana()
            onAddMana(mana)
        break;
        case 8:
            offAddMana()
            onAddMana(mana)
        break;
        case 7:
            offAddMana()
            onAddMana(mana)
        break;
        case 6:
            offAddMana()
            onAddMana(mana)
        break;
        case 5:
            offAddMana()
            onAddMana(mana)
        break;
        case 4:
            offAddMana()
            onAddMana(mana)
        break;
        case 3:
            offAddMana()
            onAddMana(mana)
        break; 
        case 2:
            offAddMana()
            onAddMana(mana)
        break;
        case 1:
            offAddMana()
            onAddMana(mana)
        break;
    }

}