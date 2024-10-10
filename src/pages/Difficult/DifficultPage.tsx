import { motion } from "framer-motion"
import { useEffect } from "react"
import { useGameStore } from "@/store/game.store"

import Loading from "@/components/Loading/Loading"
import DifficultBox from "@/components/DifficultBox/DifficultBox"
import SoundBox from "@/components/SoundBox/SoundBox"

import "./DifficultPage.scss"

export default function DifficultPage({ title }: {title: string}) {

    const { isLoading } = useGameStore()
 
    useEffect(() => {document.title = `Pokemon Game | ${title}`}, [])

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
                    <DifficultBox/>
                    <SoundBox/>
                </motion.div>
            )}   
        </motion.section>
    )
}
