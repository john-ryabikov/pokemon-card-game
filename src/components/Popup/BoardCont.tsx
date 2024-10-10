import { useGameStore } from "@/store/game.store"
import { motion } from "framer-motion"
import Button from "../Button/Button"

export default function BoardCont() {

    const { deleteFirst } = useGameStore()

    return (
        <motion.div 
            className='popup__cont'
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.15 }}
        >
            <p className='popup__title popup__title_small'>Правила игры!</p>
            <div className='popup__text-wrapper'>
                <div className='popup__text-wrap'>
                    <p className='popup__text'>
                        Твоя задача - победить вражеского Покемона.<br/><br/>

                        Добывай карточку энергии и ищи подходящую<br/>
                        для своего игрового Покемона. В каждой новой<br/> 
                        дуэли карточки будут выпадать<br/>
                        в <b>случайном</b> порядке.<br/><br/>

                        Как только ты полностью заполнишь энергию<br/>
                        своего Покемона, то <b>обязательно</b> должен<br/>
                        атаковать вражеского Покемона.<br/><br/>

                        Каждый раз, когда ты добываешь энергию,<br/>
                        у вражеского Покемона заряжается стамина.
                    </p>
                    <img className='popup__indicate-enemy' src="img/Icons/turn-stack_icon.png" alt="Indicator" draggable="false"/>
                    <p className='popup__text'>
                        Если она будет полностью заряжена, то<br/>
                        следующая добыча карточки даст вражескому<br/>
                        Покемону энергию, и как только он наберет нужное<br/>
                        количество энергии, то <b>немедленно атакует</b><br/> 
                        твоего Покемона.<br/><br/> 

                        Каждый удар дает количество <b>ПокеКоинов</b> <img src="img/Icons/pokecoin_icon.svg" alt="PokeCoin" draggable="false"/><br/>      
                        равное силе атаки твоего Покемона.<br/><br/>

                        За побежденного вражеского<br/> 
                        Покемона начисляются <b>ПокеКоины</b> <img src="img/Icons/pokecoin_icon.svg" alt="PokeCoin" draggable="false"/><br/>       
                        равные здоровью противника.<br/><br/> 

                        Так же они начисляются дополнительно<br/> 
                        за уровень сложности.<br/><br/>

                        Уровень сложности можно выбрать в<br/>
                        разделе настроек <img src="img/Icons/settings_icon.svg" alt="Setting" draggable="false"/>  
                    </p>
                    <p className='popup__title popup__title_small'>Желаем удачи!</p>
                </div>
            </div>
            <Button 
                subClass='popup-ok' 
                actionFn={() => setTimeout(() => deleteFirst('board-closed'), 450)}
            >
                <span>Ок</span>
            </Button>
        </motion.div>    
    )
}