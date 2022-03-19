import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-5 lg:p-12 min-h-screen items-center pt-12 md:pt-0 ">
      <div className="basis-3/5">
        <div className="text-4xl mt-24 md:mt-0 lg:text-6xl xl:text-8xl font-bold text-slate-800 mb-8 lg:mb-12">
          Games to play on the go
        </div>

        <Link
          to={"/asd"}
          className="transition text-2xl lg:text-4xl bg-emerald-400 border-4 border-emerald-300 text-slate-50 py-2 px-6 rounded-full hover:text-slate-700 hover:bg-emerald-300 hover:border-emerald-400"
        >
          Play Now &rarr;
        </Link>
      </div>
      <div className="basis-2/5">
        <img
          src={process.env.PUBLIC_URL + "/game.svg"}
          className="w-full p-12 lg:p-24"
          alt=""
        />
      </div>
    </div>
  );
}
