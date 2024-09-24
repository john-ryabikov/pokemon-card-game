import { type Pokemon, TypeEnergies } from "@/types/cards.type";

export const POKEMONS: Pokemon[] = [
  {
    number: 1,
    pokemonName: "Charmander",
    pokemonImg: "img/PokemonCards/Charmander.svg",
    pokemonImgStore: "img/PokemonCardsWithHp/Charmander_HP.svg",
    type: TypeEnergies.Flame,
    hp: 50,
    energyLength: 1,
    attackPower: 10,
    attackEffect: "img/Effects/burn.svg",
    started: true
  },
  {
    number: 2,
    pokemonName: "Caterpie",
    pokemonImg: "img/PokemonCards/Caterpie.svg",
    pokemonImgStore: "img/PokemonCardsWithHp/Caterpie_HP.svg",
    type: TypeEnergies.Plane,
    hp: 40,
    energyLength: 1,
    attackPower: 20,
    attackEffect: "img/Effects/plane.svg",
  },
  {
    number: 3,
    pokemonName: "Poliwag",
    pokemonImg: "img/PokemonCards/Poliwag.svg",
    pokemonImgStore: "img/PokemonCardsWithHp/Poliwag_HP.svg",
    type: TypeEnergies.Hydro,
    hp: 50,
    energyLength: 1,
    attackPower: 10,
    attackEffect: "img/Effects/hydro.svg",
  },
  {
    number: 4,
    pokemonName: "Sandshrew",
    pokemonImg: "img/PokemonCards/Sandshrew.svg",
    pokemonImgStore: "img/PokemonCardsWithHp/Sandshrew_HP.svg",
    type: TypeEnergies.Strong,
    hp: 40,
    energyLength: 1,
    attackPower: 10,
    attackEffect: "img/Effects/strong.svg",
  },
  {
    number: 5,
    pokemonName: "Abra",
    pokemonImg: "img/PokemonCards/Abra.svg",
    pokemonImgStore: "img/PokemonCardsWithHp/Abra_HP.svg",
    type: TypeEnergies.Psy,
    hp: 30,
    energyLength: 1,
    attackPower: 10,
    attackEffect: "img/Effects/psy.svg",
  },
  {
    number: 6,
    pokemonName: "Meowth",
    pokemonImg: "img/PokemonCards/Meowth.svg",
    pokemonImgStore: "img/PokemonCardsWithHp/Meowth_HP.svg",
    type: TypeEnergies.Normal,
    hp: 40,
    energyLength: 2,
    attackPower: 20,
    attackEffect: "img/Effects/normal.svg",
  },
  {
    number: 7,
    pokemonName: "Pikachu",
    pokemonImg: "img/PokemonCards/Pikachu.svg",
    pokemonImgStore: "img/PokemonCardsWithHp/Pikachu_HP.svg",
    type: TypeEnergies.Electric,
    hp: 40,
    energyLength: 2,
    attackPower: 30,
    attackEffect: "img/Effects/electric.svg",
  }
]

export const ENEMIES: Pokemon[] = [
  {
    number: 8,
    pokemonName: "Raticate",
    pokemonImg: "img/PokemonEnemyCards/Raticate.svg",
    type: TypeEnergies.Normal,
    hp: 40,
    energyLength: 1,
    attackPower: 20,
    attackEffect: "img/Effects/normal.svg",
    difficult: "easy"
  },
  {
    number: 9,
    pokemonName: "Voltorb",
    pokemonImg: "img/PokemonEnemyCards/Voltorb.svg",
    type: TypeEnergies.Electric,
    hp: 60,
    energyLength: 3,
    attackPower: 40,
    attackEffect: "img/Effects/electric.svg",
    difficult: "normal"
  },
  {
    number: 10,
    pokemonName: "Beedrill",
    pokemonImg: "img/PokemonEnemyCards/Beedrill.svg",
    type: TypeEnergies.Plane,
    hp: 80,
    energyLength: 3,
    attackPower: 40,
    attackEffect: "img/Effects/plane.svg",
    difficult: "hard"
  }
]

