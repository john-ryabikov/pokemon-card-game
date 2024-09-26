import { type Pokemon, TypeEnergies } from "@/types/cards.type";

export const POKEMONS: Pokemon[] = [
  {
    number: 1,
    pokemonName: "Charmander",
    pokemonImg: "img/PokemonCards/Charmander.png",
    pokemonImgStore: "img/PokemonCardsWithHp/Charmander_HP.png",
    type: TypeEnergies.Flame,
    hp: 50,
    energyLength: 1,
    attackPower: 10,
    attackEffect: "img/Effects/burn.svg",
    started: true,
  },
  {
    number: 2,
    pokemonName: "Caterpie",
    pokemonImg: "img/PokemonCards/Caterpie.png",
    pokemonImgStore: "img/PokemonCardsWithHp/Caterpie_HP.png",
    type: TypeEnergies.Plane,
    hp: 40,
    energyLength: 1,
    attackPower: 20,
    attackEffect: "img/Effects/plane.svg",
    purchased: false,
    cost: 0
  },
  {
    number: 3,
    pokemonName: "Poliwag",
    pokemonImg: "img/PokemonCards/Poliwag.png",
    pokemonImgStore: "img/PokemonCardsWithHp/Poliwag_HP.png",
    type: TypeEnergies.Hydro,
    hp: 50,
    energyLength: 1,
    attackPower: 10,
    attackEffect: "img/Effects/hydro.svg",
    purchased: false,
    cost: 0
  },
  {
    number: 4,
    pokemonName: "Sandshrew",
    pokemonImg: "img/PokemonCards/Sandshrew.png",
    pokemonImgStore: "img/PokemonCardsWithHp/Sandshrew_HP.png",
    type: TypeEnergies.Strong,
    hp: 40,
    energyLength: 1,
    attackPower: 10,
    attackEffect: "img/Effects/strong.svg",
    purchased: false,
    cost: 0
  },
  {
    number: 5,
    pokemonName: "Abra",
    pokemonImg: "img/PokemonCards/Abra.png",
    pokemonImgStore: "img/PokemonCardsWithHp/Abra_HP.png",
    type: TypeEnergies.Psy,
    hp: 30,
    energyLength: 1,
    attackPower: 10,
    attackEffect: "img/Effects/psy.svg",
    purchased: false,
    cost: 0
  },
  {
    number: 6,
    pokemonName: "Meowth",
    pokemonImg: "img/PokemonCards/Meowth.png",
    pokemonImgStore: "img/PokemonCardsWithHp/Meowth_HP.png",
    type: TypeEnergies.Normal,
    hp: 40,
    energyLength: 2,
    attackPower: 20,
    attackEffect: "img/Effects/normal.svg",
    purchased: false,
    cost: 0
  },
  {
    number: 7,
    pokemonName: "Pikachu",
    pokemonImg: "img/PokemonCards/Pikachu.png",
    pokemonImgStore: "img/PokemonCardsWithHp/Pikachu_HP.png",
    type: TypeEnergies.Electric,
    hp: 40,
    energyLength: 2,
    attackPower: 30,
    attackEffect: "img/Effects/electric.svg",
    purchased: false,
    cost: 0
  }
]

export const ENEMIES: Pokemon[] = [
  {
    number: 8,
    pokemonName: "Raticate",
    pokemonImg: "img/PokemonEnemyCards/Raticate.png",
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
    pokemonImg: "img/PokemonEnemyCards/Voltorb.png",
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
    pokemonImg: "img/PokemonEnemyCards/Beedrill.png",
    type: TypeEnergies.Plane,
    hp: 80,
    energyLength: 3,
    attackPower: 40,
    attackEffect: "img/Effects/plane.svg",
    difficult: "hard"
  }
]

