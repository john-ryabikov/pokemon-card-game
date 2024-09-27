import { motion } from "framer-motion"
import { useEffect } from "react"
import { useDifficultStore, useGameStore } from "@/store/game.store"

import Loading from "@/components/Loading/Loading"

import "./DifficultPage.scss"

export default function DifficultPage({ title }: {title: string}) {

    const { enemies, difficultSelected, selectDifficult } = useDifficultStore()
    const { isLoading } = useGameStore()
 
    useEffect(() => {
        document.title = `Pokemon Game | ${title}`
    }, [])

    return (
        <motion.section 
            className='difficult-page'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.45 }}
        >
            {isLoading ? <Loading/> : (
                <motion.div 
                    className='difficult-page__cont'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.45 }}
                >
                    <h1 className='difficult-page__title'>Выберите сложность</h1>
                    <div className='difficult-page__difficults-box'>
                        {enemies.map((e, i) => (
                            <button 
                                key={i} 
                                className={`difficult-page__btn ${difficultSelected === e.difficult ? "difficult-page__btn_checked" : ""}`} 
                                onClick={() => selectDifficult(e.difficult as string)}
                            >
                                <span>
                                    {e.difficult === "easy" && "Легкий"}
                                    {e.difficult === "normal" && "Средний"}
                                    {e.difficult === "hard" && "Сложный"}
                                </span>
                                {difficultSelected === e.difficult && <img src="img/Icons/checked_icon.svg" alt="Checked" draggable="false"/>}
                            </button>
                        ))}
                        
                    </div>
                </motion.div>
            )}   
        </motion.section>
    )
}
