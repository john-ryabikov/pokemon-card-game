import { POKEMONS_2 } from "@/data/pokemons-stage2.cards"
import { PokemonUp } from "@/types/cards.type"
import { IPokemonsStore } from "../game.types"
import { POKEMONS_3 } from "@/data/pokemons-stage3.cards"

export const upgradePokemonAction = ( get: () => IPokemonsStore, stage: number, pokemonNum: number ): Partial<IPokemonsStore> => {

    const state = get()

    let currentPokemon = {} as PokemonUp

    switch (stage) {
        case 1:
            currentPokemon = POKEMONS_2.find(p => p.number === pokemonNum) as PokemonUp
        break;
        case 2:
            currentPokemon = POKEMONS_3.find(p => p.number === pokemonNum) as PokemonUp
        break    
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
                    upCost: currentPokemon.upCost,
                    stage: currentPokemon.stage
                }
            } else return p
        })
    }
}