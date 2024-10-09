import type { Energy } from "@/types/cards.type"
import { motion } from "framer-motion"
import { useEffect } from "react"
import energy_give_SFX from "/sounds/sfx/energy_give.wav"

interface Props {
    energy?: Energy[]
} 

export default function StackEnergy({ energy }: Props) {

    const energy_give = new Audio(energy_give_SFX)

    useEffect(() => {
        if (energy && energy.length > 0) energy_give.play()
    }, [energy])

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
