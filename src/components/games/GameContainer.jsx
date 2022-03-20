import { Link } from "react-router-dom";
export default function GameContainer(props) {
  return (
    <>
      <div className="w-2/3 md:w-52 lg:w-64 border-2 rounded-xl p-4 flex flex-col items-center text-2xl">
        <div className="font-medium">{props.name}</div>
        <img
          src={process.env.PUBLIC_URL + "/" + props.img}
          className="p-8"
          alt=""
        />

        <Link
          to={props.link}
          className="transition w-full text-center bg-emerald-100 border-4 border-emerald-50 py-1 rounded-lg text-emerald-600 font-medium hover:bg-emerald-500 hover:text-slate-100 hover:border-emerald-200"
        >
          Play
        </Link>
      </div>
    </>
  );
}
