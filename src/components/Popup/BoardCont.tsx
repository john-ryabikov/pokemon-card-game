import { useGameStore } from "@/store/game.store"
import { motion } from "framer-motion"

export default function BoardCont() {

    const { deleteFirst } = useGameStore()

    return (
        <motion.div 
            className='popup__cont'
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.15 }}
        >
            <p className='popup__title popup__title_small'>Первая дуэль!</p>
            <p className='popup__text'>

            </p>
            <p className='popup__text'>

            </p>
            <button 
                className='popup__retry-btn popup__retry-btn_ok' 
                onClick={() => setTimeout(() => deleteFirst('board-closed'), 450)}
            >
                <span>Ок</span>
            </button>
        </motion.div>    
    )
}