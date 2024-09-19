import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import "./Header.scss"

export default function Header() {
    return (
        <motion.header 
            className='header'
            initial={{ y: -90 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.15 }}
        >
            <Link to={'/'}>
                <img className='header__exit-btn' src="img/Icons/exit_icon.svg"/>
            </Link>
            <img className='header__logo' src="img/Icons/main_logo.png"/>
        </motion.header>
    )
}
