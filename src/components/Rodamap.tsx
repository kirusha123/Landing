import Egg from "../assets/egg.png";
import Egg2 from "../assets/egg2.png";
export const RoadMap = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-[500px] bg-gradient-to-b from-cyan-200 to-cyan-50 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rotate-12"
        style={{ backgroundImage: `url(${Egg})`, backgroundSize: "cover" }}
      />
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] -rotate-12"
        style={{ backgroundImage: `url(${Egg2})`, backgroundSize: "cover" }}
      />
      <div className="flex flex-col gap-4 ml-7">
        <span className="text-6xl mt-12 font-bold text-slate-900">Roadmap</span>
        <div className="flex flex-col gap-2 text-slate-800 text-4xl pl-4">
          <span className="font-bold">1. Community Launch</span>
          <span className="ml-10 text-3xl">
            Start Telegram and Twitter communities
          </span>
          <span className="font-bold">2. KRC Contract</span>
          <span className="ml-10 text-3xl">
            Deploy KRC contract on Kaspa network
          </span>
          <span className="font-bold">3. Mint</span>
          <span className="ml-10 text-3xl">Fair Launch</span>
          <span className="font-bold">4. NFT Launch</span>
          <span className="ml-10 text-3xl">
            Release of the first NFT project on Kaspa
          </span>
          <span className="font-bold">5. Future updates</span>
          <span className="ml-10 text-3xl">
            Much more to come... Stay tuned!
          </span>
        </div>
      </div>
      <div className="flex justify-between w-[80%] gap-4 m-6 border-t pt-10 border-slate-500">
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
            className="text-3xl font-bold cursor-pointer hover:text-amber-400 text-slate-800"
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
