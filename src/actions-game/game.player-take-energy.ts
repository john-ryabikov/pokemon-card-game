import { Energy } from "@/types/cards.type"

export const playerTakeEnergy = (
    deck: Energy[], 
    takeEnergy: (id: number) => void, 
    energyBox: Energy[], 
    gameOver: () => void, 
    energyBoxRef: React.RefObject<HTMLDivElement>
) => {
    if (deck.length !== 1 ) {
        takeEnergy(deck[0].id as number)
        setTimeout(() => {
            if (energyBox.length > 0 && energyBoxRef.current) {
                energyBoxRef.current.scrollIntoView({behavior: "smooth", inline: "end"})
            }
        }, 200)
    } else gameOver()
}