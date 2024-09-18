import { Route, Routes, useLocation } from "react-router-dom";

import StartPage from "./pages/Start/StartPage";
import GamePage from "./pages/Game/GamePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "@/styles/global.scss"
import PokemonStore from "./pages/PokemonStore/PokemonStore";

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
      {location.pathname === "/" && (<Footer/>)}
    </main>
  )
}
