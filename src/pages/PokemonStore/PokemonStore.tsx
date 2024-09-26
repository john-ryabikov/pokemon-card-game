import { motion } from "framer-motion"
import { useEffect } from "react"
import { useGameStore, usePokemonsStore } from "@/store/game.store"

import Loading from "@/components/Loading/Loading"
import PokemonBox from "@/components/PokemonBox/PokemonBox"

import "./PokemonStore.scss"

export default function PokemonStore({ title }: { title: string }) {

    const { isLoading } = useGameStore()
    const { pokecoins, startedPokemon, pokemonSelected, upgradePokemon, selectPokemon } = usePokemonsStore()

    useEffect(() => {
        document.title = `${title} | Pokemon Game`
    }, [])

    return (
        <motion.section 
            className='store-page'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.45 }}
        >
            {isLoading ? <Loading/> : (
                <>
                    <motion.div 
                        className='store-page__cont'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.45 }}
                    >
                        <h1 className='store-page__title'>Choose your Pokemon</h1>
                        <PokemonBox/>
                    </motion.div>
                    {startedPokemon.stage === 1 && (
                        <motion.div 
                            className='store-page__btn-up-box'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.45 }}
                        >     
                            <p className='store-page__btn-up-price'>
                                <img src='img/Icons/pokecoin_icon.svg' alt="" draggable="false"/>
                                <span>{startedPokemon.upCost}</span>
                            </p>
                            <button
                                className={`store-page__btn-up ${(startedPokemon.upCost && pokecoins < startedPokemon.upCost) ? "store-page__btn-up_lock" : ""}`}
                                onClick={() => {
                                        upgradePokemon(pokemonSelected, startedPokemon.stage as number)
                                        selectPokemon(pokemonSelected)
                                    }
                                }
                            >
                                <span>Upgrade</span>
                            </button>
                        </motion.div>
                    )}
                </>
            )}
        </motion.section >
    )
}


