import { IEnemeis, TypeEnergies } from "@/types/cards.type";

export const ENEMIES: IEnemeis[] = [
    {
        difficult: "easy",
        enemies: [
            {
                pokemonName: "Zubat",
                pokemonImg: "img/PokemonEnemyCards/Zubat.png",
                type: TypeEnergies.Normal,
                hp: 40,
                energyLength: 1,
                attackPower: 10,
                attackEffect: "img/Effects/normal.svg",
            },
            {
                pokemonName: "Voltorb",
                pokemonImg: "img/PokemonEnemyCards/Voltorb.png",
                type: TypeEnergies.Electric,
                hp: 50,
                energyLength: 1,
                attackPower: 10,
                attackEffect: "img/Effects/electric.svg",
            },
            {
                pokemonName: "Rattata",
                pokemonImg: "img/PokemonEnemyCards/Rattata.png",
                type: TypeEnergies.Normal,
                hp: 40,
                energyLength: 2,
                attackPower: 20,
                attackEffect: "img/Effects/normal.svg",
            },
            {
                pokemonName: "Gastly",
                pokemonImg: "img/PokemonEnemyCards/Gastly.png",
                type: TypeEnergies.Psy,
                hp: 50,
                energyLength: 1,
                attackPower: 20,
                attackEffect: "img/Effects/psy.svg",
            }

        ],
        forCountTurn: 7,
        reward: 100,
        started: true,
    },
    {
        difficult: "normal",
        enemies: [
            {
                pokemonName: "Tangela",
                pokemonImg: "img/PokemonEnemyCards/Tangela.png",
                type: TypeEnergies.Plane,
                hp: 80,
                energyLength: 1,
                attackPower: 10,
                attackEffect: "img/Effects/plane.svg",
            },
            {
                pokemonName: "Farfetch'd",
                pokemonImg: "img/PokemonEnemyCards/Farfetch'd.png",
                type: TypeEnergies.Normal,
                hp: 70,
                energyLength: 2,
                attackPower: 40,
                attackEffect: "img/Effects/normal.svg",
            },
            {
                pokemonName: "Raticate",
                pokemonImg: "img/PokemonEnemyCards/Raticate.png",
                type: TypeEnergies.Normal,
                hp: 70,
                energyLength: 2,
                attackPower: 30,
                attackEffect: "img/Effects/normal.svg",
            },
            {
                pokemonName: "Haunter",
                pokemonImg: "img/PokemonEnemyCards/Haunter.png",
                type: TypeEnergies.Psy,
                hp: 90,
                energyLength: 2,
                attackPower: 40,
                attackEffect: "img/Effects/psy.svg",
            }
        ],
        purchased: false,
        cost: 0,
        forCountTurn: 6,
        reward: 300
    },
    {
        difficult: "hard",
        enemies: [
            {
                pokemonName: "Weezing",
                pokemonImg: "img/PokemonEnemyCards/Weezing.png",
                type: TypeEnergies.Plane,
                hp: 110,
                energyLength: 2,
                attackPower: 50,
                attackEffect: "img/Effects/plane.svg",
            },
            {
                pokemonName: "Pinsir",
                pokemonImg: "img/PokemonEnemyCards/Pinsir.png",
                type: TypeEnergies.Plane,
                hp: 120,
                energyLength: 3,
                attackPower: 90,
                attackEffect: "img/Effects/plane.svg",
            },
            {
                pokemonName: "Kabutops",
                pokemonImg: "img/PokemonEnemyCards/Kabutops.png",
                type: TypeEnergies.Strong,
                hp: 140,
                energyLength: 3,
                attackPower: 100,
                attackEffect: "img/Effects/strong.svg",
            },
            {
                pokemonName: "Gengar",
                pokemonImg: "img/PokemonEnemyCards/Gengar.png",
                type: TypeEnergies.Psy,
                hp: 120,
                energyLength: 3,
                attackPower: 110,
                attackEffect: "img/Effects/psy.svg",
            }
        ],
        purchased: false,
        cost: 0,
        forCountTurn: 5,
        reward: 500
    },
    {
        difficult: "very-hard",
        enemies: [
            {
                pokemonName: "Gyarados",
                pokemonImg: "img/PokemonEnemyCards/Gyarados.png",
                type: TypeEnergies.Hydro,
                hp: 200,
                energyLength: 4,
                attackPower: 200,
                attackEffect: "img/Effects/hydro.svg",
            },
            {
                pokemonName: "Aerodactyl",
                pokemonImg: "img/PokemonEnemyCards/Aerodactyl.png",
                type: TypeEnergies.Normal,
                hp: 160,
                energyLength: 2,
                attackPower: 100,
                attackEffect: "img/Effects/normal.svg",
            },
            {
                pokemonName: "Zapdos",
                pokemonImg: "img/PokemonEnemyCards/Zapdos.png",
                type: TypeEnergies.Electric,
                hp: 200,
                energyLength: 4,
                attackPower: 180,
                attackEffect: "img/Effects/electric.svg",
            },
            {
                pokemonName: "Mewtwo",
                pokemonImg: "img/PokemonEnemyCards/Mewtwo.png",
                type: TypeEnergies.Psy,
                hp: 220,
                energyLength: 3,
                attackPower: 160,
                attackEffect: "img/Effects/psy.svg",
            }
        ],
        purchased: false,
        cost: 0,
        forCountTurn: 6,
        reward: 1000
    }
]