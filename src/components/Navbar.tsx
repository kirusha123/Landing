import { ImageButton } from "./ImageButton";
import TG from "../assets/tg.png";
import X from "../assets/x.png";
import Logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <div className="flex w-full z-10 justify-between items-center h-nav bg-blue-50 shadow-sm fixed top-0 left-0 px-5">
      <button
        className="h-20 w-20 hover:cursor-default"
        style={{ backgroundImage: `url(${Logo})`, backgroundSize: "cover" }}
      />

      <div className="flex gap-4 mr-5">
        <ImageButton image={TG} url="https://t.me/PenguKAS" />
        <ImageButton image={X} url="https://x.com/PENGU_KAS" />
      </div>
    </div>
  );
};
