import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useGameMana, useGameStore } from "./store/game.store";
import { audios } from "./data/audio..sfx";
import { useEffect } from "react";

import StartPage from "./pages/Start/StartPage";
import GamePage from "./pages/Game/GamePage";
import HeaderGame from "./components/Header/Header";
import HeaderStart from "./components/Header/HeaderStart";
import HeaderStore from "./components/Header/HeaderStore";
import HeaderSetup from "./components/Header/HeaderSetup";
import PokemonStore from "./pages/PokemonStore/PokemonStore";
import Loading from "./components/Loading/Loading";
import DifficultPage from "./pages/Difficult/DifficultPage";
import Popup from "./components/Popup/Popup";
import PreloadImages from "./components/PreloadImages/PreloadImages";

import "@/styles/global.scss"

export default function App() {
  
  const location = useLocation()

  const navigate = useNavigate()

  const { mana, addMana } = useGameMana()

  const { isLoading, isFirstOpen, isFirstOpenStore, isFirstOpenDiff, isFirstOpenBoard, isGameEnd, isAuthorOpen, loadingGame } = useGameStore()

  const popup_status = isGameEnd || isFirstOpen || isFirstOpenStore || isFirstOpenDiff || isFirstOpenBoard || isAuthorOpen

  const onStartGame = () => {
    loadingGame(audios)
  }

  useEffect(() => {
    if (mana !== 10) addMana()
    onStartGame()
    navigate('/', { replace: true });
    return () => {}
  },[])

  return (
    <main>
      <PreloadImages/>
      {isLoading ? <Loading/> : (
        <>
          {popup_status && <Popup/>}
          <AnimatePresence mode="wait">
            {location.pathname == "/" && (<HeaderStart key={"header-start"}/>)}
            {location.pathname == "/game" && (<HeaderGame key={"header-game"}/>)}
            {location.pathname == "/store" && (<HeaderStore key={"header-store"}/>)}
            {location.pathname == "/difficult" && (<HeaderSetup key={"header-setup"}/>)}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<StartPage/>}/>
              <Route path="/store" element={<PokemonStore title="Pokemon Store"/>}/>
              <Route path="/game" element={<GamePage title="Game Board"/>}/>
              <Route path="/difficult" element={<DifficultPage title="Game Settings"/>}/>
            </Routes>
          </AnimatePresence>
        </>
      )}
    </main>
  )
}
