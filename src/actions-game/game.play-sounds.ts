import { Energy } from "@/types/cards.type"

import popup_view_SFX from "/sounds/sfx/popup_view.wav"
import button_push_SFX from "/sounds/sfx/button_push.wav"
import upgrade_SFX from "/sounds/sfx/upgrade.mp3"
import take_card_SFX from "/sounds/sfx/deck.mp3"
import energy_give_SFX from "/sounds/sfx/energy_give.wav"

export const onViewPopup = (status: boolean | null) => {
    const popup_view = new Audio(popup_view_SFX)
    status !== null && popup_view.play()
}

export const onButtonPush = (subclass: string) => {
    const button_push = new Audio()
    button_push.src = subclass === "up" ? upgrade_SFX : button_push_SFX
    button_push.play()
}

export const onTakeEnergyCard = () => {
    const take_card = new Audio(take_card_SFX)
    take_card.play()
}

export const onGiveEnergyToPokemon = (energy: Energy[]) => {
    const energy_give = new Audio(energy_give_SFX)
    if (energy && energy.length > 0) energy_give.play()
}

export const onPokemonAttack = (
    soundPokemonAttack: string,
    soundEnemyAttack: string,
    isPlayer: boolean, 
    isEnemy: boolean
) => {
    const sound_pokemon = new Audio(soundPokemonAttack)
    const sound_enemy = new Audio(soundEnemyAttack)
    isPlayer && sound_pokemon.play()
    isEnemy && sound_enemy.play()
}