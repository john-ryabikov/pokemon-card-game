import { useGameStore } from "@/store/game.store"
import { motion } from "framer-motion"

export default function StoreCont() {

    const { deleteFirst } = useGameStore()

    return (
        <motion.div 
            className='popup__cont'
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.15 }}
        >
            <p className='popup__title popup__title_small'>Открой всех Покемонов!</p>
            <p className='popup__text'>
                Здесь представлена коллекция карточек Покемонов,<br/> 
                которые ты сможешь использовать в дуэли против<br/> 
                вражеских Покемонов.<br/><br/>

                <b>Важный совет:</b><br/>
                Открывай, улучшай и анализируй Покемонов после<br/>
                каждой дуэли, так как каждый Покемон по<br/>
                своему уникален.<br/><br/>

                У некоторых Покемонов есть <b>3 стадии</b> улучшений,<br/>
                а у некоторых <b>2 стадии</b> или вовсе их нет.<br/><br/>

                При выборе Покемона обращай внимание<br/> 
                на его количество здоровья, силу атаки и количество<br/> требуемого типа энергии.
            </p>
            <button 
                className='popup__retry-btn popup__retry-btn_ok' 
                onClick={() => setTimeout(() => deleteFirst('store-closed'), 450)}
            >
                <span>Ок</span>
            </button>
        </motion.div>    
    )
}