import { POKEMONS } from "@/data/pokemons.cards";
import { useGameStore } from "@/store/game.store";

import PokemonCard from "../PokemonCard/PokemonCard";

export default function Board() {

    const {
        playerPokemon,  
        playerHP, 
        playerEnergy, 
        playerAttackEffect,
        enemyHP, 
    } = useGameStore()

    return (
        <div className="game-page__board">
            <PokemonCard 
                typePlayer="enemy" 
                card={POKEMONS[6].pokemonImg} 
                hp={enemyHP}
            />
            <PokemonCard 
                typePlayer="player" 
                card={playerPokemon} 
                energy={playerEnergy} 
                hp={playerHP} 
                effectAttack={playerAttackEffect}
            />
        </div>
    )
}
