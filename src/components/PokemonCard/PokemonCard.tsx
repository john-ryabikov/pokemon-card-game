import { Energy } from '@/types/cards.type'
import { useGameStore } from '@/store/game.store'
import { motion } from "framer-motion"

import PokemonCardEnergyDeck from './PokemonCardEnergyDeck'

import './PokemonCard.scss'

interface Props {
    typePlayer: "player" | "enemy",
    card: string,
    energyLenght: number,
    energy?: Energy[]
    hp?: number
}

export default function PokemonCard({ typePlayer, card, energyLenght, energy, hp } : Props ) {

    const {isAttacked, playerAttackPower} = useGameStore()

    return (
        <div className="pokemon-card">
            {(typePlayer === "player" && isAttacked) && 
                <motion.img 
                    className='pokemon-card__attack-effect' 
                    src="img/Effects/flame.png"
                    initial={{x: -56, y: 0, opacity: 0 }}
                    whileInView={{x: -56, y: -60, opacity: 1 }}
                    transition={{delay: 0.15, duration: 0.5}}
                />
            }
            {(typePlayer === "enemy" && isAttacked) && 
                <motion.span 
                    className='pokemon-card__attack-for-enemy'
                    initial={{x: -20, y: 0, opacity: 0 }}
                    whileInView={{x: -20, y: -10, opacity: 1 }}
                    transition={{delay: 0.15, duration: 0.5}}
                >
                    -{playerAttackPower}
                </motion.span>
            }
            {typePlayer === "enemy" && <span className='pokemon-card__hp'>{hp}</span>}
            <img className='pokemon-card__card-img' src={card} alt="Pokemon" draggable={false}/>
            <div className='pokemon-card__stack-energy'>
                {[...Array(energyLenght)].map((_energy, i) => {
                    return <PokemonCardEnergyDeck key={i}/>
                })}
            </div>
            <div className='pokemon-card__stack-energy-icons'>
                {energy?.map((energy, i) => {
                    return <img key={i} width={12} height={12} src={energy.cardIcon} alt="Pokemon Energy" draggable={false}/>
                })}
            </div>
        </div>
    )
}
