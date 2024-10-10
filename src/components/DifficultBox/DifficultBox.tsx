import { useDifficultStore, usePokemonsStore } from "@/store/game.store"
import Button from "../Button/Button"

export default function DifficultBox() {

    const { enemies, difficultSelected, selectDifficult, unlockDifficult } = useDifficultStore()
    const { pokecoins, spendCoins } = usePokemonsStore()

    const buyDifficult = (difficult: string, difficultCost: number) => {
        setTimeout(() => {
            unlockDifficult(difficult); 
            spendCoins(difficultCost)
        }, 400)
    }

    return (
        <div className='difficult-page__difficults-box'>
            <h1 className='difficult-page__title'>Выберите сложность</h1>
            {enemies.map((e, i) => (
                <div key={i} className='difficult-page__diff'>
                    {e.purchased === false && (
                        <div className='difficult-page__buy-diff'>
                            <p className='difficult-page__buy-diff-price'>
                                <img src='img/Icons/pokecoin_icon.svg' alt="" draggable="false"/>
                                <span>{e.cost as number}</span>
                            </p>
                            <Button 
                                subClass={(e.cost && pokecoins < e.cost) ? "buy-diff-lock" : "buy-diff"} 
                                actionFn={() => buyDifficult(e.difficult as string, e.cost as number)}
                            >
                                <span>Открыть</span>
                            </Button>
                        </div>
                    )}
                    <Button 
                        subClass={difficultSelected === e.difficult ? "diff-btn-checked" : "diff-btn"}
                        actionFn={() => selectDifficult(e.difficult as string)}
                        unClick={e.purchased === false} 
                    >
                        <span>
                            {e.difficult === "easy" && "Легкий"}
                            {e.difficult === "normal" && "Средний"}
                            {e.difficult === "hard" && "Сложный"}
                            {e.difficult === "very-hard" && "Мастер"}
                        </span>
                        {difficultSelected === e.difficult && <img src="img/Icons/checked_icon.svg" alt="Checked" draggable="false"/>}
                    </Button>
                </div>
            ))}
        </div>
    )
}
