export enum TypeEnergies {
    'Flame' , 'Plane' , 'Psy' , 'Hydro' , 'Strong' , 'Electric',
}

export interface Pokemon {
    number: number,
    pokemonName: string,
    pokemonImg: string,
    type: TypeEnergies,
    hp: number,
    energy: Energy[],
    energyLength: number,
    attackPower: number,
    attackEffect: string
}

export interface Energy {
    id: number,
    type: TypeEnergies,
    cardImg: string,
    cardIcon: string
}