import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Broadcast from "./components/Broadcast";
import BottleSpin from "./components/games/BottleSpin";
import CoinFlip from "./components/games/CoinFlip";
import TicTacToe from "./components/games/TicTacToe";
import Games from "./pages/Games";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <div className="karla">
        <Broadcast />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/bottlespin" element={<BottleSpin />} />
            <Route path="/games/tictactoe" element={<TicTacToe />} />
            <Route path="/games/coinflip" element={<CoinFlip />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
