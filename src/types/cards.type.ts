export enum TypeEnergies {
    'Flame' , 'Plane' , 'Psy' , 'Hydro' , 'Strong' , 'Electric', 'Normal',
}

export interface Pokemon {
    number?: number,
    pokemonName: string,
    pokemonImg: string,
    pokemonImgStore?: string,
    type: TypeEnergies,
    hp: number,
    energyLength: number,
    attackPower: number,
    attackEffect: string,
    stage?: number,
    maxStage?: number,
    cost?: number,
    upCost?: number,
    started?: boolean,
    purchased?: boolean
}

export interface PokemonUp {
    number: number,
    pokemonName: string,
    pokemonImg: string,
    pokemonImgStore?: string,
    hp: number,
    energyLength: number,
    attackPower: number,
    upCost?: number,
    stage: number 
}

export interface Energy {
    id: number,
    type: TypeEnergies,
    cardImg: string,
    cardIcon: string
}

export interface IEnemeis {
    difficult: 'easy' | 'normal' | 'hard' | 'very-hard',
    enemies: Pokemon[],
    purchased?: boolean,
    cost?: number,
    forCountTurn: number,
    reward: number,
    started?: boolean
}