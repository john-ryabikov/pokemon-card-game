import { Pokemon, TypeEnergies } from "@/types/cards.type";

export const ENEMIES: Pokemon[] = [
    {
        difficult: "easy",
        pokemonName: "Voltorb",
        pokemonImg: "img/PokemonEnemyCards/Voltorb.png",
        type: TypeEnergies.Electric,
        hp: 60,
        energyLength: 1,
        attackPower: 10,
        attackEffect: "img/Effects/electric.svg",
        forCountTurn: 7,
        reward: 100,
        started: true,
    },
    {
        difficult: "normal",
        pokemonName: "Raticate",
        pokemonImg: "img/PokemonEnemyCards/Raticate.png",
        type: TypeEnergies.Normal,
        hp: 70,
        energyLength: 2,
        attackPower: 30,
        attackEffect: "img/Effects/normal.svg",
        forCountTurn: 6,
        reward: 300,
        cost: 0,
        purchased: false
    },
    {
        difficult: "hard",
        pokemonName: "Beedrill",
        pokemonImg: "img/PokemonEnemyCards/Beedrill.png",
        type: TypeEnergies.Plane,
        hp: 130,
        energyLength: 3,
        attackPower: 110,
        attackEffect: "img/Effects/plane.svg",
        forCountTurn: 5,
        reward: 500,
        cost: 0,
        purchased: false
    }
]