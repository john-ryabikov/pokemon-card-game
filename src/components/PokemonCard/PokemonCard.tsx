import { Energy } from '@/types/cards.type'

import PokemonCardEnergyDeck from './PokemonCardEnergyDeck'

import './PokemonCard.scss'

interface Props {
    card: string,
    energyLenght: number,
    energy?: Energy[]
    hp?: number
}

export default function PokemonCard({ card, energyLenght, energy, hp } : Props ) {
    return (
        <div className="pokemon-card">
            <img className='pokemon-card__card-img' src={card}/>
            {hp && <span className='pokemon-card__hp'>{hp}</span>}
            <div className='pokemon-card__stack-energy'>
                {[...Array(energyLenght)].map((_energy, i) => {
                    return <PokemonCardEnergyDeck key={i}/>
                })}
            </div>
            <div className='pokemon-card__stack-energy-icons'>
                {energy?.map((energy, i) => {
                    return <img key={i} width={12} height={12} src={energy.cardIcon}/>
                })}
            </div>
        </div>
    )
}
