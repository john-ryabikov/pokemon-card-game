import { useGameStore } from "@/store/game.store"
import { motion } from "framer-motion"

export default function DifficultCont() {

    const { deleteFirst } = useGameStore()

    return (
        <motion.div 
            className='popup__cont'
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.15 }}
        >
            <p className='popup__title popup__title_small'>Меняй уровень сложности!</p>
            <p className='popup__text'>
                Здесь представлены уровни сложности<br/>
                вражеских Покемонов.<br/><br/>

                За каждую сложность соотвествующая награда -<br/> 
                чем выше уровень вражеских Покемонов,<br/>
                тем выше награда за победу.<br/><br/>

                Выбирай подходящую сложность с умом, так как<br/>
                каждый Покемон уникален по своему,<br/>
                иначе тебе не победить в дуэлях.<br/><br/>

                На начальном этапе тебе доступен<br/>
                <b>Легкий</b> уровень сложности.<br/><br/>
                
                Зарабатывай <b>Покекоины</b> <img src="img/Icons/pokecoin_icon.svg" alt="Bulbasaur" draggable="false"/><br/>        
                и открывай остальные уровни.
            </p>
            <button 
                className='popup__retry-btn popup__retry-btn_ok' 
                onClick={() => setTimeout(() => deleteFirst('diff-closed'), 450)}
            >
                <span>Ок</span>
            </button>
        </motion.div>    
    )
}