import { Energy, IEnemeis } from "@/types/cards.type"

export const playerTakeEnergy = (
    deck: Energy[], 
    takeEnergy: (id: number, indicateEnemy: number, enemies: IEnemeis) => void, 
    energyBox: Energy[], 
    gameOver: () => void, 
    energyBoxRef: React.RefObject<HTMLDivElement>,
    countTurn: number,
    indicateEnemy: number,
    isSmallMobile: boolean,
    enemies: IEnemeis
) => {
    const variableIndicate = isSmallMobile ? 135 : 165
    if (deck.length !== 1 ) {
        indicateEnemy += variableIndicate / countTurn
        takeEnergy(deck[0].id as number, indicateEnemy, enemies)
        setTimeout(() => {
            if (energyBox.length > 0 && energyBoxRef.current) {
                energyBoxRef.current.scrollIntoView({behavior: "smooth", inline: "end"})
            }
        }, 200)
    } else gameOver()
}