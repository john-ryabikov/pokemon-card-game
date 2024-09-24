import { motion } from "framer-motion"
import { useEffect } from "react"
import { useGameStore, usePokemonsStore } from "@/store/game.store"

import Loading from "@/components/Loading/Loading"

import "./PokemonStore.scss"

export default function PokemonStore({ title }: { title: string }) {

    const { pokemonSelected, pokemons, selectPokemon } = usePokemonsStore()
    const { isLoading } = useGameStore()

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
                            <div key={i} className={`store-page__pokemon ${pokemonSelected === p.number ? "store-page__pokemon_selected" : ""}`} onClick={() => selectPokemon(p.number)}>
                                <img src={p.pokemonImgStore} alt={p.pokemonName}/>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.section >
    )
}


