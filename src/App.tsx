import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useGameStore } from "./store/game.store";
import { useEffect } from "react";

import StartPage from "./pages/Start/StartPage";
import GamePage from "./pages/Game/GamePage";
import Header from "./components/Header/Header";
import HeaderStart from "./components/Header/HeaderStart";
import PokemonStore from "./pages/PokemonStore/PokemonStore";
import Loading from "./components/Loading/Loading";
import DifficultPage from "./pages/Difficult/DifficultPage";
import Popup from "./components/Popup/Popup";

import "@/styles/global.scss"

export default function App() {
  
  const location = useLocation()

  const { isLoading, isGameEnd, loadingGame } = useGameStore()

  useEffect(() => {
    loadingGame(3000)
    return () => {}
  },[])

  return (
    <main>
      {isGameEnd && <Popup/>}
      {isLoading ? <Loading/> : (
        <>
          <AnimatePresence mode="wait">
            {location.pathname !== "/" && (<Header key={"header-game"}/>)}
            {location.pathname === "/" && (<HeaderStart key={"header-start"}/>)}
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
