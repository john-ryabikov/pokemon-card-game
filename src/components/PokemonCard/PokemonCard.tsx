import { Energy } from '@/types/cards.type'
import { useGameStore } from '@/store/game.store'
import { useEffect } from 'react'
import { preloadImage } from '@/actions-game/preload-image'
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

    useEffect(() => {
        if (effectAttack) {
            preloadImage(effectAttack)
            preloadImage(card)
        }    
    }, [])

    const {isAttacked, playerAttackPower} = useGameStore()

    return (
        <div className="pokemon-card">
            {(typePlayer === "player" && isAttacked) && 
                <motion.img 
                    className='pokemon-card__attack-effect' 
                    src={effectAttack}
                    initial={{x: -45, y: 0, opacity: 1 }}
                    whileInView={{x: -45, y: -60, opacity: 0 }}
                    transition={{delay: 0.15, duration: 0.5}}
                />
            }
            {(typePlayer === "enemy" && isAttacked) && 
                <motion.span 
                    className='pokemon-card__hit'
                    initial={{x: 10, y: 0, opacity: 1 }}
                    whileInView={{x: 10, y: -10, opacity: 0 }}
                    transition={{delay: 0.15, duration: 0.5}}
                >
                    -{playerAttackPower}
                </motion.span>
            }
            <span className='pokemon-card__hp'>{hp} HP</span>
            <img className='pokemon-card__card-img' src={card} alt="Pokemon" draggable={false}/>
            <StackEnergy energy={energy}/>
        </div>
    )
}
