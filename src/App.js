import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Games from "./pages/Games";
import Home from "./pages/Home";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <div className="karla">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
