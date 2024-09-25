import { motion } from "framer-motion"
import { useEffect } from "react"
import { useGameStore, usePokemonsStore } from "@/store/game.store"

import Loading from "@/components/Loading/Loading"

import "./PokemonStore.scss"

export default function PokemonStore({ title }: { title: string }) {

    const { isLoading } = useGameStore()
    const {
        pokecoins, 
        pokemonSelected, 
        pokemons, 
        selectPokemon, 
        unlockPokemon, 
        spendCoins 
    } = usePokemonsStore() 

    useEffect(() => {
        document.title = `${title} | Pokemon Game`
    }, [])

    const buyPokemon = (pokemonNumber: number, pokemonCost: number) => {
        setTimeout(() => {
            unlockPokemon(pokemonNumber); 
            spendCoins(pokemonCost)
        }, 400)
    }

    return (
        <motion.section 
            className='store-page'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.45 }}
        >
            {isLoading ? <Loading/> : (
                <motion.div 
                    className='store-page__pokemons'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.45 }}
                >
                    <h1 className='store-page__title'>Choose your Pokemon</h1>
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
                                        <button className={`store-page__buy-pokemon-btn ${(p.cost && pokecoins < p.cost) ? "store-page__buy-pokemon-btn_lock" : ""}`} onClick={() => buyPokemon(p.number, p.cost as number)}>
                                            <span>Unlock</span>
                                        </button>
                                    </div>
                                )}
                                <button onClick={() => selectPokemon(p.number)}>
                                    <img className={`store-page__pokemon-img ${p.purchased === false ? "store-page__pokemon-img_lock" : ""}`} src={p.pokemonImgStore} alt={p.pokemonName}/>
                                </button>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.section >
    )
}


