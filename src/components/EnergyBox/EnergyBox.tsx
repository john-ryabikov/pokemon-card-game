import { useGameStore } from "@/store/game.store"
import { useShallow } from "zustand/react/shallow"
import { forwardRef } from "react"
import { motion } from "framer-motion"

const EnergyBox = forwardRef<HTMLDivElement>(function EnergyBox(props, ref) {

    const {} = props

    const energyBox = useGameStore(useShallow((state) => (state.energyBox)))
    const giveEnergy = useGameStore(useShallow(state => state.giveEnergy))

    return (
        <div className='game-page__energy-box' >
            <div className={`${energyBox.length === 0 ? "game-page__energy-box-wprapper_empty" : "game-page__energy-box-wprapper"}`} ref={ref}>
                {!energyBox.length ? "Not enough enegry cards" : (
                energyBox.map((elem, i) => (
                    <button key={i} className='game-page__energy-card'  onClick={() => giveEnergy(elem.id as number)}>
                        <motion.img 
                            src={elem.cardImg} 
                            alt="Energy Card" 
                            draggable={false}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.25 }}
                            viewport={{ once: true }}
                        />
                    </button>
                )))}
            </div>
        </div>
    )
})

export default EnergyBox
