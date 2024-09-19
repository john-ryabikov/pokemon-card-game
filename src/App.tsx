import { Route, Routes, useLocation } from "react-router-dom";

import StartPage from "./pages/Start/StartPage";
import GamePage from "./pages/Game/GamePage";
import Header from "./components/Header/Header";
import PokemonStore from "./pages/PokemonStore/PokemonStore";

import "@/styles/global.scss"

export default function App() {

  const location = useLocation()

  return (
    <main>
      {location.pathname !== "/" && (<Header/>)}
      <Routes>
        <Route path="/" element={<StartPage />}/>
        <Route path="/store" element={<PokemonStore title="Pokemon Store"/>}/>
        <Route path="/game" element={<GamePage title="Game Board"/>}/>
      </Routes>
    </main>
  )
}
