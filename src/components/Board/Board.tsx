import { POKEMONS } from "@/data/pokemons.cards";
import { useGameStore } from "@/store/game.store";
import { motion } from "framer-motion"

import PokemonCard from "../PokemonCard/PokemonCard";

export default function Board() {

    const {
        playerPokemon,  
        playerHP, 
        playerEnergy, 
        playerAttackEffect,
        enemyHP,
        enemyEnergy 
    } = useGameStore()

    return (
        <motion.div 
            className="game-page__board"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.45 }}
        >
            <PokemonCard 
                typePlayer="enemy" 
                card={POKEMONS[6].pokemonImg}
                energy={enemyEnergy} 
                hp={enemyHP}
                effectAttack={POKEMONS[6].attackEffect}
            />
            <PokemonCard 
                typePlayer="player" 
                card={playerPokemon} 
                energy={playerEnergy} 
                hp={playerHP} 
                effectAttack={playerAttackEffect}
            />
        </motion.div>
    )
}
