import { motion } from "framer-motion"

import "./Loading.scss"

export default function Loading() {
  return (
        <motion.p 
            className='loading'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
        >
            <span className='loading__loader'></span>
            <span className='loading__text'>Загрузка...</span>
        </motion.p>
    )
}
