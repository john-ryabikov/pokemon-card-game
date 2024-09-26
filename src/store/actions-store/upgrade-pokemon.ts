import { POKEMONS_2 } from "@/data/pokemons-stage2.cards"
import { PokemonUp } from "@/types/cards.type"
import { IPokemonsStore } from "../game.types"

export const upgradePokemonAction = ( get: () => IPokemonsStore, stage: number, pokemonNum: number ): Partial<IPokemonsStore> => {

    const state = get()

    let currentPokemon = {} as PokemonUp

    if (stage === 1) {
        currentPokemon = POKEMONS_2.find(p => p.number === pokemonNum) as PokemonUp
    }

    return {
        pokemons: state.pokemons.map(p => {
            if (pokemonNum === p.number) {
                return {
                    ...p,
                    pokemonName: currentPokemon.pokemonName, 
                    pokemonImg: currentPokemon.pokemonImg,
                    pokemonImgStore: currentPokemon.pokemonImgStore,
                    hp: currentPokemon.hp,
                    attackPower: currentPokemon.attackPower,
                    energyLength: currentPokemon.energyLength,
                    stage: 2
                }
            } else return p
        })
    }
}