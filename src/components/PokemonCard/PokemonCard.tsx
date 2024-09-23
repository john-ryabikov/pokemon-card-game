import { Energy } from '@/types/cards.type'
import { useGameStore } from '@/store/game.store'
import { motion } from "framer-motion"

import StackEnergy from './StackEnergy'

import './PokemonCard.scss'

interface Props {
    typePlayer: "player" | "enemy",
    card: string,
    energy?: Energy[]
    hp?: number,
    effectAttack?: string
}

export default function PokemonCard({ typePlayer, card, energy, hp, effectAttack } : Props ) {

    const {isPlayerAttacked, isEnemyAttacked, playerAttackPower, enemyAttackPower} = useGameStore()

    return (
        <div className="pokemon-card">
            {(typePlayer === "player" && isPlayerAttacked) && 
                <motion.img 
                    className='pokemon-card__attack-effect' 
                    src={effectAttack}
                    initial={{x: -45, y: 0, opacity: 1 }}
                    whileInView={{x: -45, y: -60, opacity: 0 }}
                    transition={{delay: 0.15, duration: 0.5}}
                />
            }
            {(typePlayer === "enemy" && isPlayerAttacked) && 
                <motion.span 
                    className='pokemon-card__hit'
                    initial={{x: 10, y: 0, opacity: 1 }}
                    whileInView={{x: 10, y: -10, opacity: 0 }}
                    transition={{delay: 0.15, duration: 0.5}}
                >
                    -{playerAttackPower}
                </motion.span>
            }
            {(typePlayer === "enemy" && isEnemyAttacked) && 
                <motion.img 
                    className='pokemon-card__attack-effect pokemon-card__attack-effect_enemy' 
                    src={effectAttack}
                    initial={{x: -45, y: 0, opacity: 1 }}
                    whileInView={{x: -45, y: 60, opacity: 0 }}
                    transition={{delay: 0.15, duration: 0.5}}
                />
            }
            {(typePlayer === "player" && isEnemyAttacked) && 
                <motion.span 
                    className='pokemon-card__hit'
                    initial={{x: 10, y: 0, opacity: 1 }}
                    whileInView={{x: 10, y: -10, opacity: 0 }}
                    transition={{delay: 0.15, duration: 0.5}}
                >
                    -{enemyAttackPower}
                </motion.span>
            }
            <span className='pokemon-card__hp'>{hp} HP</span>
            <img className='pokemon-card__card-img' src={card} alt="Pokemon" draggable={false}/>
            <StackEnergy energy={energy}/>
        </div>
    )
}
