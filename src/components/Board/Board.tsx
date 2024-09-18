import { POKEMONS } from "@/data/pokemons.cards";
import { useGameStore } from "@/store/game.store";

import PokemonCard from "../PokemonCard/PokemonCard";

export default function Board() {

    const {
        playerPokemon,  
        playerHP, 
        playerEnergy, 
        playerEnergyLength,
        enemyHP, 
    } = useGameStore()

    return (
        <div className="game-page__board">
            <PokemonCard typePlayer="enemy" card={POKEMONS[6].pokemonImg} energyLenght={POKEMONS[6].energyLength} hp={enemyHP}/>
            <PokemonCard typePlayer="player" card={playerPokemon} energy={playerEnergy} energyLenght={playerEnergyLength} hp={playerHP}/>
        </div>
    )
}
