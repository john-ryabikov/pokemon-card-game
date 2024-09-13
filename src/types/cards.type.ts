export interface Pokemon {
    number: number,
    pokemonName: string,
    pokemonImg: string,
    type: "Flame" | "Plane",
    hp: number,
    energy: Energy[],
    energyLength: number,
    attackPower: number,
    attackCost: number
}

export interface Energy {
    id: number,
    type: "Flame" | "Plane",
    cardImg: string,
    cardIcon: string
}