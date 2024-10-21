import { EmblaCarousel } from "./EmblaCarousel";
import SP1 from "../assets/sp1.jpg";
import SP2 from "../assets/sp2.jpg";
import SP3 from "../assets/sp3.jpg";
import SP4 from "../assets/sp4.jpg";
import SP5 from "../assets/sp5.jpg";
import SP6 from "../assets/sp6.jpg";
import SP7 from "../assets/sp7.jpg";

export const CarouselSection = () => {
  return (
    <div className=" flex flex-col items-center h-[350px] shadow-md bg-gradient-to-t from-cyan-200 to-cyan-100">
      <span className="text-5xl font-bold text-slate-900">Sneak peak</span>
      <EmblaCarousel
        slides={[SP1, SP2, SP3, SP4, SP5, SP6, SP7]}
        options={{
          loop: true,
          startIndex: 0,
          align: "start",
        }}
      />
    </div>
  );
};
