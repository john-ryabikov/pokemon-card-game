import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import "./Header.scss"

export default function Header() {
    return (
        <motion.header 
            className='header'
            initial={{ y: -90 }}
            animate={{ y: 0 }}
            exit={{opacity: 0 }}
            transition={{ delay: 0.45 }}
        >
            <Link to={'/'} className='header__exit-btn'>
                <img src="img/Icons/exit_icon.svg" alt="" draggable="false"/>
            </Link>
        </motion.header>
    )
}
