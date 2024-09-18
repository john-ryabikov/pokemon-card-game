import { motion } from "framer-motion"
import { useEffect } from "react"
import { useGameStore, usePokemonsStore } from "@/store/game.store"

import "./PokemonStore.scss"

export default function PokemonStore({ title }: { title: string }) {

    const { pokemons } = usePokemonsStore()
    const { pokemonSelected, selectPokemon } = useGameStore()

    useEffect(() => {
        document.title = `${title} | Pokemon Game`
    }, [])

    return (
        <motion.section 
            className='store-page'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
        >
            <div className='store-page__pokemons'>
                {pokemons.slice(0, 5).map((p, i) => (
                    <div key={i} className={`store-page__pokemon ${pokemonSelected === p.number ? "store-page__pokemon_selected" : ""}`} onClick={() => selectPokemon(p.number)}>
                        <img src={p.pokemonImgStore} alt={p.pokemonName}/>
                    </div>
                ))}
            </div>
        </motion.section >
    )
}


