import type { Energy } from "@/types/cards.type"

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
                    return <img key={i} width={12} height={12} src={energy.cardIcon} alt="Pokemon Energy" draggable={false}/>
                })}
            </div>
        </>
    )
    }
