import { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function BottleSpin() {
  const [angle, setAngle] = useState(0);
  const [animate, setAnimate] = useState(false);
  const rotate = (e) => {
    setAnimate(true);
    e.target.innerText = "Spinning";
    setTimeout(() => {
      let no = Math.floor(Math.random() * 360);
      setAnimate(false);
      setAngle(no);
      console.log(angle);
      e.target.innerText = "Spin";
    }, 1000);
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center my-24 flex-col gap-8">
        <div className="text-4xl font-medium">Bottle Spin</div>
        <div className="w-52 lg:w-72 lg:text-6xl">
          <img
            src={process.env.PUBLIC_URL + "/bottle.svg"}
            className={"p-8 " + (animate && "animate-spin")}
            style={{ transform: "rotate(" + angle + "deg)" }}
            alt="coin_img"
          />
        </div>
        <button
          className="text-3xl text-white rounded-2xl py-1 px-4 bg-emerald-400  border-4 border-emerald-300"
          onClick={(e) => {
            rotate(e);
          }}
        >
          Spin
        </button>
      </div>
      <Footer />
    </>
  );
}
