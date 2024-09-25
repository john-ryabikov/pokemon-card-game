export enum TypeEnergies {
    'Flame' , 'Plane' , 'Psy' , 'Hydro' , 'Strong' , 'Electric', 'Normal',
}

export interface Pokemon {
    number: number,
    pokemonName: string,
    pokemonImg: string,
    pokemonImgStore?: string,
    type: TypeEnergies,
    hp: number,
    energyLength: number,
    attackPower: number,
    attackEffect: string,
    started?: boolean,
    purchased?: boolean,
    cost?: number,
    difficult?: 'easy' | 'normal' | 'hard'  
}

export interface Energy {
    id: number,
    type: TypeEnergies,
    cardImg: string,
    cardIcon: string
}