import type { Energy } from "@/types/cards.type"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { onGiveEnergyToPokemon } from "@/actions-game/game.play-sounds"

interface Props {
    energy?: Energy[]
} 

export default function StackEnergy({ energy }: Props) {

    useEffect(() => onGiveEnergyToPokemon(energy as Energy[]), [energy])

    return (
        <div className='pokemon-card__stack-energy-icons'>
            {energy?.map((energy, i) => {
                return (
                    <motion.img 
                        key={i} 
                        width={16} 
                        height={16} 
                        src={energy.cardIcon} 
                        alt="Pokemon Energy" 
                        draggable={false}
                        initial={{ opacity: 0, scale: 2 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 }}
                    />
                )
            })}
        </div>
    )
}
