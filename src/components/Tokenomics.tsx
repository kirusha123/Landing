import TokenomicsIMG from "../assets/tokenomics.png";

export const Tokenomics = () => {
  return (
    <div
      className="h-[500px]"
      style={{
        backgroundImage: `url(${TokenomicsIMG})`,
        backgroundSize: "cover",
      }}
    />
  );
};
