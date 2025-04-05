import { useGameMana, usePokemonsStore } from "@/store/game.store"

interface Props {
    type: string,
}

export default function Indicator({ type }: Props) {

    const { pokecoins } = usePokemonsStore()

    const { mana, maxMana } = useGameMana()

    return (
        <div className='header__indicator'>
            {type === 'coins' && <img className='header__indicator-icon' src="img/Icons/pokecoin_icon.svg" alt="Pokecoin" draggable="false"/>}
            {type === 'mana' && <img className='header__indicator-icon' src="img/Icons/game-mana_icon.svg" alt="Mana" draggable="false"/>}
            <span className='header__indicator-total'>
                {type === 'coins' && pokecoins.toLocaleString()}
                {type === 'mana' && `${mana}/${maxMana}`}
            </span>
        </div>
    )
}
