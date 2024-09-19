import { Energy } from '@/types/cards.type'
import { useGameStore } from '@/store/game.store'
import { motion } from "framer-motion"

import StackEnergy from './StackEnergy'

import './PokemonCard.scss'

interface Props {
    typePlayer: "player" | "enemy",
    card: string,
    energyLenght: number,
    energy?: Energy[]
    hp?: number,
    effectAttack?: string
}

export default function PokemonCard({ typePlayer, card, energyLenght, energy, hp, effectAttack } : Props ) {

    const {isAttacked, playerAttackPower} = useGameStore()

    return (
        <div className="pokemon-card">
            {(typePlayer === "player" && isAttacked) && 
                <motion.img 
                    className='pokemon-card__attack-effect' 
                    src={effectAttack}
                    initial={{x: -56, y: 0, opacity: 1 }}
                    whileInView={{x: -56, y: -60, opacity: 0 }}
                    transition={{delay: 0.15, duration: 0.5}}
                />
            }
            {(typePlayer === "enemy" && isAttacked) && 
                <motion.span 
                    className='pokemon-card__attack-for-enemy'
                    initial={{x: -20, y: 0, opacity: 1 }}
                    whileInView={{x: -20, y: -10, opacity: 0 }}
                    transition={{delay: 0.15, duration: 0.5}}
                >
                    -{playerAttackPower}
                </motion.span>
            }
            <span className='pokemon-card__hp'>{hp} HP</span>
            <img className='pokemon-card__card-img' src={card} alt="Pokemon" draggable={false}/>
            <StackEnergy energyLenght={energyLenght} energy={energy}/>
        </div>
    )
}
