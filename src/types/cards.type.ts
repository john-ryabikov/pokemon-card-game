export enum TypeEnergies {
    'Flame' , 'Plane' , 'Psy' , 'Hydro' , 'Strong' , 'Electric',
}

export interface Pokemon {
    number: number,
    pokemonName: string,
    pokemonImg: string,
    pokemonImgStore?: string,
    type: TypeEnergies,
    hp: number,
    energy: Energy[],
    energyLength: number,
    attackPower: number,
    attackEffect: string,
    started?: boolean
}

export interface Energy {
    id: number,
    type: TypeEnergies,
    cardImg: string,
    cardIcon: string
}