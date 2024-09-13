import { useGameStore } from "@/store/game.store";
import { Energy } from "@/types/cards.type";

export default function EnergyCard({ card } : { card: Energy }) {

  const giveEnergy = useGameStore((state) => state.giveEnergy)

  return (
      <img 
        className='game-page__energy-card' 
        src={card.cardImg}
        onClick={() => giveEnergy(card.id as number)}
      />
  )
}
