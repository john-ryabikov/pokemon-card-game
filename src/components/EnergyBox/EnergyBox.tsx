import { useGameStore } from "@/store/game.store"
import { forwardRef } from "react"
import { motion } from "framer-motion"

const EnergyBox = forwardRef<HTMLDivElement>(function EnergyBox(props, ref) {

    const {} = props

    const {
        isAttack,
        isEnemyAttacked,
        enemyTakedEnergy,
        energyBox,
        giveEnergy
    } = useGameStore()

    return (
        <motion.div 
            className="game-page__energy-box"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.45 }}
        >
            <div className={`${energyBox.length === 0 ? "game-page__energy-box-wprapper_empty" : "game-page__energy-box-wprapper"}`} ref={ref}>
                {!energyBox.length ? "Здесь пока ничего нет" : (
                    energyBox.map((elem, i) => (
                        <button 
                            key={i} className='game-page__energy-card'
                            disabled={isAttack || isEnemyAttacked || enemyTakedEnergy}  
                            onClick={() => giveEnergy(elem.id as number)}
                        >
                            <motion.img 
                                src={elem.cardImg} 
                                alt="Energy Card" 
                                draggable={false}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                            />
                        </button>
                    ))
                )}
            </div>
        </motion.div>
    )
})

export default EnergyBox
