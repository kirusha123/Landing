import Sleep from "../assets/sleep.png";
import Tg from "../assets/tg.png";
import { ImageButton } from "./ImageButton";

export const HelloSection = () => {
  return (
    <div className="w-full h-[600px] flex justify-center items-center gap-4 bg-gradient-to-t from-cyan-100 to-cyan-50">
      <div className="flex flex-col justify-center gap-20">
        <h1 className="mt-10 ml-5 text-8xl font-bold text-slate-900">
          Waddle Waddle Waddle Waddle
        </h1>
        <div className="flex justify-center items-center">
          <span className="text-slate-600 text-4xl font-bold">Subscribe</span>
          <ImageButton image={Tg} url="https://t.me/PenguKAS" />
        </div>
      </div>
      <div
        className="w-[500px] h-[500px]"
        style={{
          backgroundImage: `url(${Sleep})`,
          backgroundSize: "cover",
          marginTop: "-50px",
        }}
      />
    </div>
  );
};
