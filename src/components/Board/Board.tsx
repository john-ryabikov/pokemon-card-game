import { useDifficultStore, useGameStore, usePokemonsStore } from "@/store/game.store";
import { motion } from "framer-motion"
import { forwardRef } from "react";

import PokemonCard from "../PokemonCard/PokemonCard";

const Board = forwardRef<HTMLDivElement>(function Board({}, ref) {

    const { startedPokemon } = usePokemonsStore()
    const { startedDiff } = useDifficultStore()
    const { playerHP, playerEnergy, enemyHP, enemyEnergy, randomEnemy } = useGameStore()

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
                card={startedDiff.enemies[randomEnemy].pokemonImg}
                energy={enemyEnergy} 
                hp={enemyHP}
                effectAttack={startedDiff.enemies[randomEnemy].attackEffect}
                attackEnemySFX={startedDiff.enemies[randomEnemy].attackSound}
                ref={ref}
            />
            <PokemonCard 
                typePlayer="player" 
                card={startedPokemon.pokemonImg} 
                energy={playerEnergy} 
                hp={playerHP} 
                effectAttack={startedPokemon.attackEffect}
                attackPlayerSFX={startedPokemon.attackSound}
            />
        </motion.div>
    )
})

export default Board
