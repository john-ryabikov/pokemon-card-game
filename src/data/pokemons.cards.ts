import { type Pokemon, TypeEnergies } from "@/types/cards.type";

export const POKEMONS : Pokemon[] = [
    {
      number: 1,
      pokemonName: "Charmander",
      pokemonImg: "img/PokemonCards/Charmander.png",
      type: TypeEnergies.Flame,
      hp: 30,
      energy: [],
      energyLength: 2,
      attackPower: 30,
      attackEffect: "img/Effect/flame.png"
    },
    {
      number: 2,
      pokemonName: "Beedrill",
      pokemonImg: "img/PokemonCards/Beedrill.png",
      type: TypeEnergies.Plane,
      hp: 90,
      energy: [],
      energyLength: 3,
      attackPower: 20,
      attackEffect: "img/Effect/flame.png"
    }
]

