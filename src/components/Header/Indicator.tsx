import { usePokemonsStore } from "@/store/game.store"

interface Props {
    type: string,
}

export default function Indicator({ type }: Props) {

    const { pokecoins } = usePokemonsStore()

    return (
        <div className='header__indicator'>
            {type === 'coins' && <img className='header__indicator-icon' src="img/Icons/pokecoin_icon.svg" alt="Pokecoin" draggable="false"/>}
            {type === 'mana' && <img className='header__indicator-icon' src="img/Icons/game-mana_icon.svg" alt="Mana" draggable="false"/>}
            <span className='header__indicator-total'>
                {type === 'coins' && pokecoins}
                {type === 'mana' && "10/10"}
            </span>
        </div>
    )
}
