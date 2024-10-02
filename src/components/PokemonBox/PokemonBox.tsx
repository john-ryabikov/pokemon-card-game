import { usePokemonsStore } from "@/store/game.store"
import PreloadImages from "../PreloadImages/PreloadImages";

export default function PokemonBox() {

    const { pokemons, pokemonSelected, pokecoins, unlockPokemon, spendCoins, selectPokemon } = usePokemonsStore()

    const buyPokemon = (pokemonNumber: number, pokemonCost: number) => {
        setTimeout(() => {
            unlockPokemon(pokemonNumber); 
            spendCoins(pokemonCost)
            selectPokemon(pokemonNumber)
        }, 400)
    }

    return (
        <div className='store-page__pokemons'>
            <PreloadImages/>
            <div className='store-page__pokemons-box'>
                {pokemons.map((p, i) => (
                    <div 
                        key={i} 
                        className={`store-page__pokemon ${pokemonSelected === p.number ? "store-page__pokemon_selected" : ""}`} 
                    >
                        {p.purchased === false && (
                            <div className='store-page__buy-pokemon'>
                                <p className='store-page__buy-pokemon-price'>
                                    <img src='img/Icons/pokecoin_icon.svg' alt="" draggable="false"/>
                                    <span>{p.cost as number}</span>
                                </p>
                                <button className={`store-page__buy-pokemon-btn ${(p.cost && pokecoins < p.cost) ? "store-page__buy-pokemon-btn_lock" : ""}`} onClick={() => buyPokemon(p.number as number, p.cost as number)}>
                                    <span>Открыть</span>
                                </button>
                            </div>
                        )}
                        <button onClick={() => selectPokemon(p.number as number)}>
                            <img className={`store-page__pokemon-img ${p.purchased === false ? "store-page__pokemon-img_lock" : ""}`} src={p.pokemonImgStore} alt={p.pokemonName}/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
