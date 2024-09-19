import type { Energy } from "@/types/cards.type"
import { motion } from "framer-motion"

interface Props {
    energyLenght: number,
    energy?: Energy[]
} 

export default function StackEnergy({ energyLenght, energy }: Props) {
    return (
        <>
            <div className='pokemon-card__stack-energy'>
                {[...Array(energyLenght)].map((_energy, i) => {
                    return <div key={i} className='pokemon-card__energy-deck'></div>
                })}
            </div>
            <div className='pokemon-card__stack-energy-icons'>
                {energy?.map((energy, i) => {
                    return <motion.img 
                                key={i} 
                                width={12} 
                                height={12} 
                                src={energy.cardIcon} 
                                alt="Pokemon Energy" 
                                draggable={false}
                                initial={{ opacity: 0, scale: 2 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.15 }}
                            />
                })}
            </div>
        </>
    )
    }
