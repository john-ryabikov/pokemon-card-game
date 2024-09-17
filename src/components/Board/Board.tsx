import { POKEMONS } from "@/data/pokemons.cards";
import { useGameStore } from "@/store/game.store";
import PokemonCard from "../PokemonCard/PokemonCard";

export default function Board() {

    const { enemyHP, playerEnergy, playerEnergyLength } = useGameStore()

    return (
        <div className="game-page__board">
            <PokemonCard typePlayer="enemy" card={POKEMONS[1].pokemonImg} energyLenght={POKEMONS[1].energyLength} hp={enemyHP}/>
            <PokemonCard typePlayer="player" card={POKEMONS[0].pokemonImg} energy={playerEnergy} energyLenght={playerEnergyLength}/>
        </div>
    )
}
