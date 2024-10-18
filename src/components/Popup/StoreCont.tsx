import { useGameStore } from "@/store/game.store"
import { motion } from "framer-motion"
import Button from "../Button/Button"

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
            <div className='popup__text-wrapper-box'>
                <div className='popup__text-wrapper'>
                    <div className='popup__text-wrap'>
                        
                        <p className='popup__text'>
                            Здесь представлена коллекция карточек Покемонов,<br/> 
                            которые ты сможешь использовать в дуэли против<br/> 
                            вражеских Покемонов.<br/><br/>

                            <b>Важный совет:</b><br/>
                            Открывай, улучшай и анализируй Покемонов<br/>
                            после каждой дуэли, так как каждый Покемон<br/>
                            по своему уникален.<br/><br/>

                            При выборе Покемона обращай внимание<br/> 
                            на его количество здоровья, силу атаки и<br/>
                            количество требуемого типа энергии.
                        </p>
                        <img className='popup__pokemon-info' src="img/PokemonCards/Pokemon-preview.png" alt="Pokemon Info" draggable="false"/>
                        <p className='popup__text'>
                            У некоторых Покемонов есть <b>3 стадии</b> улучшений,<br/>
                            а у некоторых <b>2 стадии</b> или вовсе их нет.<br/><br/>

                            Иконка <img src="img/Icons/up-this_icon.svg" alt="Up" draggable="false"/> подсказывает тебе, что Покемон<br/>
                            имеет следующую стадию улучшения<br/><br/>  
                        </p>
                    </div>
                </div>
            </div>
            <Button 
                subClass='popup-ok' 
                actionFn={() => setTimeout(() => deleteFirst('store-closed'), 450)}
            >
                <span>Ок</span>
            </Button>
        </motion.div>    
    )
}