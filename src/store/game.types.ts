import type { Energy, Pokemon, TypeEnergies } from "@/types/cards.type";

export interface IGameStore {
    deck: Energy[],
    pokemonSelected: number;
    playerPokemon: string,
    playerPokemonType: TypeEnergies,
    playerEnergy: Energy[],
    playerEnergyLength: number,
    playerAttackPower: number,
    playerHP: number,
    playerAttackEffect: string,
    enemyHP: number,
    energyBox: Energy[],
    isGameEnd: boolean,
    isLose: boolean,
    isWin: boolean,
    isAttack: boolean,
    isAttacked: boolean,
    isLoading: boolean,
    error: null,
    loadingPokemons: (timeout: number) => Promise<void>
    selectPokemon: (pokemonNumber: number) => void,
    startGame: () => void,
    takeEnergy: (id: number) => void,
    giveEnergy: (id: number) => void,
    attack: () => void
    gameOver: () => void,
}

export interface IPokemonsStore {
    pokemons: Pokemon[],
    startedPokemon: Pokemon
}