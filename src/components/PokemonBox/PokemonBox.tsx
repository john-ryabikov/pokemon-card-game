import { usePokemonsStore } from "@/store/game.store"
import { motion } from "framer-motion"

import Button from "../Button/Button";

export default function PokemonBox() {

    const { pokemons, startedPokemon, pokemonSelected, pokecoins, unlockPokemon, upgradePokemon, spendCoins, selectPokemon } = usePokemonsStore()

    const buyPokemon = (pokemonNumber: number, pokemonCost: number) => {
        setTimeout(() => {
            unlockPokemon(pokemonNumber); 
            spendCoins(pokemonCost)
            selectPokemon(pokemonNumber)
        }, 400)
    }

    const pokemonUp = () => {
        setTimeout(() => {
            upgradePokemon(pokemonSelected, startedPokemon.stage as number)
            selectPokemon(pokemonSelected)
            spendCoins(startedPokemon.upCost as number)
        }, 350)
    }

    return (
        <div className='store-page__pokemons'>
            <div className='store-page__pokemons-box'>
                {pokemons.map((p, i) => (
                    <div 
                        key={i} 
                        className={`store-page__pokemon ${pokemonSelected === p.number ? "store-page__pokemon_selected" : ""}`} 
                    >
                        {(p.upCost && p.purchased === true) && <img className="store-page__pokemon-up-this" src="img/Icons/up-this_icon.svg" alt="Up" draggable="false"/>}
                        {p.purchased === false && (
                            <div className='store-page__buy-pokemon'>
                                <p className='store-page__buy-pokemon-price'>
                                    <img src='img/Icons/pokecoin_icon.svg' alt="" draggable="false"/>
                                    <span>{p.cost?.toLocaleString()}</span>
                                </p>
                                <Button 
                                    subClass={(p.cost && pokecoins < p.cost) ? "buy-pokemon-lock" : "buy-pokemon"}
                                    actionFn={() => buyPokemon(p.number as number, p.cost as number)}
                                >
                                    <span>Открыть</span>
                                </Button>
                            </div>
                        )}
                        <Button actionFn={() => selectPokemon(p.number as number)}>
                            <img className={`store-page__pokemon-img ${p.purchased === false ? "store-page__pokemon-img_lock" : ""}`} src={p.pokemonImgStore} alt={p.pokemonName}/>
                        </Button>
                    </div>
                ))}
            </div>
            <div className='store-page__current-pokemon'>
                <p className='store-page__current-pokemon-title'>Текущий покемон</p>
                <img className='store-page__current-pokemon-img' src={startedPokemon.pokemonImgStore}/>
                {startedPokemon.stage !== startedPokemon.maxStage && (
                    <motion.div 
                        className='store-page__btn-up-box'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.45 }}
                    >     
                        <p className='store-page__btn-up-price'>
                            <img src='img/Icons/pokecoin_icon.svg' alt="" draggable="false"/>
                            <span>{startedPokemon.upCost?.toLocaleString()}</span>
                        </p>
                        <Button
                            subClass={(startedPokemon.upCost && pokecoins < startedPokemon.upCost) ? "up-lock" : "up"}
                            actionFn={pokemonUp}
                        >
                            <span>Улучшить</span>
                        </Button>
                    </motion.div>
                )}
            </div>
        </div>
    )
}
