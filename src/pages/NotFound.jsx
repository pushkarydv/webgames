import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-7xl text-gray-500 text-center mt-10 z-10">404</h1>
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="..."
          className="sm:-mt-20"
        ></img>
        <div className="-mt-10 sm:-mt-20 md:-mt-36 mb-5">
          <h2 className="text-3xl text-center">Look like you're lost</h2>
          <p className="text-lg text-center text-gray-500">
            the page you are looking for not avaible!
          </p>
        </div>
        <Link to="/" className="cursor-pointer">
          <button className="transition bg-emerald-500 hover:bg-emerald-600 text-white w-32 h-90 p-3 rounded-full">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
