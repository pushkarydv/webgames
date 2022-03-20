import GameContainer from "./GameContainer";

export default function GameList() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 p-5 lg:p-12 justify-center items-center flex-wrap">
        <GameContainer
          name="Bottle Spin"
          img="bottle.svg"
          link="/games/bottlespin"
        />
        <GameContainer
          name="Tic Tac Toe"
          img="tictactoe.svg"
          link="/games/tictactoe"
        />
        <GameContainer
          name="Coin Flip"
          img="coin_side_2.svg"
          link="/games/coinflip"
        />
      </div>
      <div className="text-center text-2xl text-slate-600 p-2">
        More games will be added as this grows <br />
        this is Open Source, you can make your contribution via{" "}
        <a
          href="https://github.com/pushkarydv/webgames"
          className="text-emerald-800 font-semibold "
        >
          Github &rarr;
        </a>
      </div>
    </>
  );
}
