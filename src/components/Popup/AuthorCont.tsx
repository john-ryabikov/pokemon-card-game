import { motion } from "framer-motion"
import { useGameStore } from "@/store/game.store"
import { useEffect } from "react"
import { onViewPopup } from "@/actions-game/game.play-sounds"

import Button from "../Button/Button"

export default function AuthorCont() {

    const { isSounds, isAuthorOpen, deleteFirst } = useGameStore()

    useEffect(() => {isSounds && onViewPopup(isAuthorOpen)}, [])

    return (
        <motion.div 
            className='popup__cont'
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.15 }}
        >
            <p className='popup__title popup__title_small'>Об авторе игры</p>
            <p className='popup__text'>
                Это неофициальный проект!<br/><br/>

                Все аудиозаписи и изображения были взяты<br/>
                на стороних ресурсах.<br/><br/> 

                Игра ни к чему не обязывает пользователя,<br/>
                в ней отсутсвует платный контент и разработана<br/> 
                исключеительно только в целях развлечения!<br/><br/><br/>

                Ссылка на разработчика этого проекта:<br/><br/>

                <a href="https://just-site.ru" target="_blank" rel="nofollow">https://just-site.ru</a>
            </p>
            <Button 
                subClass='popup-ok' 
                actionFn={() => setTimeout(() => deleteFirst('author-closed'), 450)}
            >
                <span>Ок</span>
            </Button>
        </motion.div>    
    )
}
