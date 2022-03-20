import { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function CoinFlip() {
  const [coin, setCoin] = useState("Heads");
  const flip = (e) => {
    e.target.innerText = "Flipping";
    setTimeout(() => {
      let no = Math.floor(Math.random() * 2);
      if (no === 0) {
        setCoin("Heads");
      } else {
        setCoin("Tails");
      }
      e.target.innerText = "Flip";
    }, 800);
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center my-24 flex-col gap-8">
        <div className="text-4xl font-medium">Flip Coin</div>
        <div className="w-52 lg:w-72 lg:text-6xl">
          <img
            src={
              process.env.PUBLIC_URL +
              (coin === "Heads" ? "/coin_side_1.svg" : "/coin_side_2.svg")
            }
            className="p-8"
            alt="coin_img"
          />
        </div>
        <button
          className="text-3xl text-white rounded-2xl py-1 px-4 bg-emerald-400  border-4 border-emerald-300"
          onClick={(e) => {
            flip(e);
          }}
        >
          Flip
        </button>
      </div>
      <Footer />
    </>
  );
}
