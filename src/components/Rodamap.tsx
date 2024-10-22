import Egg from "../assets/egg.png";
import Egg2 from "../assets/egg2.png";
import "./Roadmap.css";

export const RoadMap = () => {
  return (
    <div className="relative flex flex-col items-start min-[960px]:items-center w-full min-h-[500px] bg-gradient-to-b from-cyan-200 to-cyan-50 overflow-hidden">
      <div
        className="absolute -top-3 right-0 w-[400px] h-[400px] rotate-12 invisible  min-[960px]:visible"
        style={{ backgroundImage: `url(${Egg})`, backgroundSize: "cover" }}
      />
      <div
        className="absolute -top-3 left-0 w-[400px] h-[400px] -rotate-12 invisible  min-[960px]:visible"
        style={{ backgroundImage: `url(${Egg2})`, backgroundSize: "cover" }}
      />
      <div className="flex flex-col gap-4 ml-7 z-10">
        <span className="text-6xl mt-12 font-bold text-slate-900">Roadmap</span>
        <ul className="list-decimal text-slate-900">
          <li className="flex flex-col">
            <span className="font-bold text-3xl">1. Community Launch</span>
            <span className="text-3xl ml-8">
              Start Telegram and Twitter communities
            </span>
          </li>
          <li className="flex flex-col">
            <span className="font-bold text-3xl">2. KRC Contract</span>
            <span className="text-3xl ml-8">
              Deploy KRC contract on Kaspa network
            </span>
          </li>
          <li className="flex flex-col">
            <span className="font-bold text-3xl">3. Mint</span>
            <span className="text-3xl ml-8">Fair Launch</span>
          </li>
          <li className="flex flex-col">
            <span className="font-bold text-3xl">4. NFT Launch</span>
            <span className="text-3xl ml-8">Fair Launch</span>
          </li>
          <li className="flex flex-col">
            <span className="font-bold text-3xl">5. Future updates</span>
            <span className="text-3xl ml-8">
              Much more to come... Stay tuned!
            </span>
          </li>
        </ul>
      </div>
      <div className="flex justify-between flex-col min-[960px]:flex-row  w-[80%] gap-4 mx-6 my-10 border-t pt-10 border-slate-500">
        <div className="flex flex-col gap-4">
          <span className="text-3xl font-bold text-slate-800">
            Support the PENGU — slide with PENGU!
          </span>
          <span className="text-3xl text-slate-800">
            Your contribution helps PENGU take the next big step—getting listed
            on major exchanges! By donating, you're directly supporting the
            growth of our community and making it easier for people to access
            and trade PENGU. Еvery donation will go towards listing
          </span>
        </div>
        <div />
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="text-3xl text-slate-800">Support us:</div>
          <div
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
            className="text-3xl w-full font-bold cursor-pointer hover:text-amber-400 text-slate-800"
            onClick={() =>
              navigator.clipboard.writeText(
                "kaspa:qqq87hnee6k2ua7s074mrwa6nprtpvpht3asrs2gqr0w5rquk8r4ze3pcjy9e"
              )
            }
          >
            kaspa:qqq87hnee6k2ua7s074mrwa6nprtpvpht3asrs2gqr0w5rquk8r4ze3pcjy9e
          </div>
        </div>
      </div>
    </div>
  );
};
