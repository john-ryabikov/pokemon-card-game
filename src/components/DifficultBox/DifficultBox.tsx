import { useDifficultStore, usePokemonsStore } from "@/store/game.store"

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
            {enemies.map((e, i) => (
                <div key={i} className='difficult-page__diff'>
                    {e.purchased === false && (
                        <div className='difficult-page__buy-diff'>
                            <p className='difficult-page__buy-diff-price'>
                                <img src='img/Icons/pokecoin_icon.svg' alt="" draggable="false"/>
                                <span>{e.cost as number}</span>
                            </p>
                            <button className={`difficult-page__buy-diff-btn ${(e.cost && pokecoins < e.cost) ? "store-page__buy-pokemon-btn_lock" : ""}`} onClick={() => buyDifficult(e.difficult as string, e.cost as number)}>
                                <span>Открыть</span>
                            </button>
                        </div>
                    )}
                    <button 
                        className={`difficult-page__btn ${difficultSelected === e.difficult ? "difficult-page__btn_checked" : ""}`}
                        disabled={e.purchased === false } 
                        onClick={() => selectDifficult(e.difficult as string)}
                    >
                        <span>
                            {e.difficult === "easy" && "Легкий"}
                            {e.difficult === "normal" && "Средний"}
                            {e.difficult === "hard" && "Сложный"}
                            {e.difficult === "very-hard" && "Мастер"}
                        </span>
                        {difficultSelected === e.difficult && <img src="img/Icons/checked_icon.svg" alt="Checked" draggable="false"/>}
                    </button>
                </div>
            ))}
        </div>
    )
}
