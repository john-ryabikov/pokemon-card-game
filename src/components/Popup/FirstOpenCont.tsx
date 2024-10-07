import { useGameStore } from "@/store/game.store"
import { motion } from "framer-motion"
import Button from "../Button/Button"

export default function FirstOpenCont() {

    const { deleteFirst } = useGameStore()

    return (
        <motion.div 
            className='popup__cont'
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.15 }}
        >
            <p className='popup__title popup__title_small'>Добро пожаловать!</p>
            <p className='popup__text'>
                Приветсвуем тебя в простой карточной игре,<br/>
                где твоим Покемонам предстоит сразиться в дуэли<br/> 
                с вражескими Покемонами и заработать<br/>на свой счет <b>ПокеКоины</b> <img src="img/Icons/pokecoin_icon.svg" alt="Bulbasaur" draggable="false"/><br/><br/>            
                С их помощью можно будет приобрести новые <br/> 
                или улучшать карточки Покемонов в Магазине.<br/><br/>
                <b>Ваш первый стартовый Покемон</b>
            </p>
            <img className='popup__started-pokemon' src="img/PokemonCardsWithHp/Bulbasaur_HP.png" alt="Bulbasaur" draggable="false"/>
            <Button 
                subClass='popup-ok' 
                actionFn={() => setTimeout(() => deleteFirst('start-closed'), 450)}
            >
                <span>Погнали!</span>
            </Button>
        </motion.div>    
    )
}
