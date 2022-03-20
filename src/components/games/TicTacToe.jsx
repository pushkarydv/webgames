import { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Button from "./tictactoe/Button";
const click = new Array(9).fill("#");
export default function TicTacToe() {
  const [win, setWin] = useState("");
  const [cross, setCross] = useState(false);
  const re = () => {
    click.fill("#", 0, 9);
    setWin("");
    setCross(false);
  };
  const checkWin = () => {
    if (click[0] === click[1] && click[1] === click[2] && click[0] !== "#") {
      setWin(`${click[0]} wins`);
    } else if (
      click[3] === click[4] &&
      click[4] === click[5] &&
      click[3] !== "#"
    ) {
      setWin(`${click[3]} wins`);
    } else if (
      click[6] === click[7] &&
      click[7] === click[8] &&
      click[6] !== "#"
    ) {
      setWin(`${click[6]} wins`);
    } else if (
      click[0] === click[3] &&
      click[3] === click[6] &&
      click[0] !== "#"
    ) {
      setWin(`${click[0]} wins`);
    } else if (
      click[1] === click[4] &&
      click[4] === click[7] &&
      click[1] !== "#"
    ) {
      setWin(`${click[1]} wins`);
    } else if (
      click[2] === click[5] &&
      click[5] === click[8] &&
      click[2] !== "#"
    ) {
      setWin(`${click[2]} wins`);
    } else if (
      click[0] === click[4] &&
      click[4] === click[8] &&
      click[0] !== "#"
    ) {
      setWin(`${click[0]} wins`);
    } else if (
      click[2] === click[4] &&
      click[4] === click[6] &&
      click[2] !== "#"
    ) {
      setWin(`${click[2]} wins`);
    }
  };
  const change = (no) => {
    if (win) {
      return console.log(`${win} Reload Gme`);
    } else {
      if (click[no] === "#") {
        click[no] = cross ? "X" : "O";
        setCross(!cross);
      } else {
        return console.log(`Already Filled`);
      }
    }
    checkWin();
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center my-24 flex-col gap-8">
        <div className="pb-6 font-medium text-2xl lg:text-4xl">
          {win ? (
            <div>{win}</div>
          ) : (
            <div>{cross ? "Cross" : "Circle"} Turn</div>
          )}
        </div>
        <div className=" grid grid-cols-3 gap-4 w-52 text-4xl lg:w-72 lg:text-6xl text-white font-medium">
          {click.map((btn, index) => (
            <Button
              name={btn}
              key={index}
              click={() => {
                change(index);
              }}
            />
          ))}
        </div>
        <button
          className="p-2 rounded-lg bg-emerald-200 text-2xl font-medium text-emerald-900 border-4 border-emerald-100"
          onClick={() => re()}
        >
          Restart
        </button>
      </div>
      <Footer />
    </>
  );
}
