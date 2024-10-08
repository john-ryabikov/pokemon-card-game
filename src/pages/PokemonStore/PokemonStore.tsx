import { motion } from "framer-motion"
import { useEffect } from "react"
import { useGameStore, usePokemonsStore } from "@/store/game.store"

import Loading from "@/components/Loading/Loading"
import PokemonBox from "@/components/PokemonBox/PokemonBox"
import Button from "@/components/Button/Button"

import "./PokemonStore.scss"

export default function PokemonStore({ title }: { title: string }) {

    const { isLoading } = useGameStore()
    const { pokecoins, startedPokemon, pokemonSelected, upgradePokemon, selectPokemon, spendCoins } = usePokemonsStore()

    useEffect(() => {
        document.title = `${title} | Pokemon Game`
    }, [])

    const pokemonUp = () => {
        setTimeout(() => {
            upgradePokemon(pokemonSelected, startedPokemon.stage as number)
            selectPokemon(pokemonSelected)
            spendCoins(startedPokemon.upCost as number)
        }, 350)
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
                <>
                    <motion.div 
                        className='store-page__cont'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.45 }}
                    >
                        <h1 className='store-page__title'>Выбери своего Покемона</h1>
                        <PokemonBox/>
                    </motion.div>
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
                                <span>{startedPokemon.upCost}</span>
                            </p>
                            <Button
                                subClass={(startedPokemon.upCost && pokecoins < startedPokemon.upCost) ? "up-lock" : "up"}
                                actionFn={pokemonUp}
                            >
                                <span>Улучшить</span>
                            </Button>
                        </motion.div>
                    )}
                </>
            )}
        </motion.section >
    )
}


