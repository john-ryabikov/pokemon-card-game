import { Route, Routes, useLocation } from "react-router-dom";

import StartPage from "./pages/Start/StartPage";
import GamePage from "./pages/Game/GamePage";
import Header from "./components/Header/Header";

import "@/styles/global.scss"

export default function App() {

  const location = useLocation()

  return (
    <>
      <main>
        {location.pathname === "/game" && (<Header/>)}
        <Routes>
          <Route path="/" element={<StartPage />}/>
          <Route path="/game" element={<GamePage title="Game Board"/>}/>
        </Routes>
      </main>
    </>
  )
}
