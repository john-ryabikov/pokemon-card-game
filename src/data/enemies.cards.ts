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
                attackSound: "sounds/sfx/attack/normal_attack.mp3"
            },
            {
                pokemonName: "Voltorb",
                pokemonImg: "img/PokemonEnemyCards/Voltorb.png",
                type: TypeEnergies.Electric,
                hp: 50,
                energyLength: 1,
                attackPower: 10,
                attackEffect: "img/Effects/electric.svg",
                attackSound: "sounds/sfx/attack/electric_attack.mp3"
            },
            {
                pokemonName: "Rattata",
                pokemonImg: "img/PokemonEnemyCards/Rattata.png",
                type: TypeEnergies.Normal,
                hp: 40,
                energyLength: 2,
                attackPower: 20,
                attackEffect: "img/Effects/normal.svg",
                attackSound: "sounds/sfx/attack/normal_attack.mp3"
            },
            {
                pokemonName: "Gastly",
                pokemonImg: "img/PokemonEnemyCards/Gastly.png",
                type: TypeEnergies.Psy,
                hp: 50,
                energyLength: 1,
                attackPower: 20,
                attackEffect: "img/Effects/psy.svg",
                attackSound: "sounds/sfx/attack/psy_attack.mp3"
            }

        ],
        forCountTurn: 7,
        reward: 300,
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
                attackSound: "sounds/sfx/attack/plane_attack.wav"
            },
            {
                pokemonName: "Farfetch'd",
                pokemonImg: "img/PokemonEnemyCards/Farfetch'd.png",
                type: TypeEnergies.Normal,
                hp: 70,
                energyLength: 2,
                attackPower: 40,
                attackEffect: "img/Effects/normal.svg",
                attackSound: "sounds/sfx/attack/normal_attack.mp3"
            },
            {
                pokemonName: "Raticate",
                pokemonImg: "img/PokemonEnemyCards/Raticate.png",
                type: TypeEnergies.Normal,
                hp: 70,
                energyLength: 2,
                attackPower: 30,
                attackEffect: "img/Effects/normal.svg",
                attackSound: "sounds/sfx/attack/normal_attack.mp3"
            },
            {
                pokemonName: "Haunter",
                pokemonImg: "img/PokemonEnemyCards/Haunter.png",
                type: TypeEnergies.Psy,
                hp: 90,
                energyLength: 2,
                attackPower: 40,
                attackEffect: "img/Effects/psy.svg",
                attackSound: "sounds/sfx/attack/psy_attack.mp3"
            }
        ],
        purchased: false,
        cost: 35000,
        forCountTurn: 6,
        reward: 600
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
                attackSound: "sounds/sfx/attack/plane_attack.wav"
            },
            {
                pokemonName: "Pinsir",
                pokemonImg: "img/PokemonEnemyCards/Pinsir.png",
                type: TypeEnergies.Plane,
                hp: 120,
                energyLength: 3,
                attackPower: 90,
                attackEffect: "img/Effects/plane.svg",
                attackSound: "sounds/sfx/attack/plane_attack.wav"
            },
            {
                pokemonName: "Kabutops",
                pokemonImg: "img/PokemonEnemyCards/Kabutops.png",
                type: TypeEnergies.Strong,
                hp: 140,
                energyLength: 3,
                attackPower: 100,
                attackEffect: "img/Effects/strong.svg",
                attackSound: "sounds/sfx/attack/strong_attack.mp3"
            },
            {
                pokemonName: "Gengar",
                pokemonImg: "img/PokemonEnemyCards/Gengar.png",
                type: TypeEnergies.Psy,
                hp: 120,
                energyLength: 3,
                attackPower: 110,
                attackEffect: "img/Effects/psy.svg",
                attackSound: "sounds/sfx/attack/psy_attack.mp3"
            }
        ],
        purchased: false,
        cost: 75000,
        forCountTurn: 5,
        reward: 1200
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
                attackSound: "sounds/sfx/attack/hydro_attack.mp3"
            },
            {
                pokemonName: "Aerodactyl",
                pokemonImg: "img/PokemonEnemyCards/Aerodactyl.png",
                type: TypeEnergies.Normal,
                hp: 160,
                energyLength: 2,
                attackPower: 100,
                attackEffect: "img/Effects/normal.svg",
                attackSound: "sounds/sfx/attack/normal_attack.mp3"
            },
            {
                pokemonName: "Zapdos",
                pokemonImg: "img/PokemonEnemyCards/Zapdos.png",
                type: TypeEnergies.Electric,
                hp: 200,
                energyLength: 4,
                attackPower: 180,
                attackEffect: "img/Effects/electric.svg",
                attackSound: "sounds/sfx/attack/electric_attack.mp3"
            },
            {
                pokemonName: "Mewtwo",
                pokemonImg: "img/PokemonEnemyCards/Mewtwo.png",
                type: TypeEnergies.Psy,
                hp: 220,
                energyLength: 3,
                attackPower: 160,
                attackEffect: "img/Effects/psy.svg",
                attackSound: "sounds/sfx/attack/psy_attack.mp3"
            }
        ],
        purchased: false,
        cost: 150000,
        forCountTurn: 6,
        reward: 2500
    }
]