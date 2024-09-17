import { Link } from "react-router-dom"

import "./Header.scss"

export default function Header() {
    return (
        <header className='header'>
            <Link to={'/'}>
                <img className='header__exit-btn' src="img/Icons/exit_icon.svg"/>
            </Link>
            <img className='header__logo' src="img/Icons/main_logo.png"/>
        </header>
    )
}
