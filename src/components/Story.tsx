import StorI from "../assets/hello.png";

export const Story = () => {
  return (
    <div
      className="flex relative h-[500px] justify-center items-end"
      style={{ backgroundImage: `url(${StorI})`, backgroundSize: "cover" }}
    >
      <div className="absolute top-3 left-5 h-full text-black text-5xl break-words max-w-[900px] mr-36 font-bold text-balance p-5">
        In the heart of the blockchain universe, where cryptos battled for
        dominance and digital assets rose and fell, a new force began to stir.
        It wasn’t just any cryptocurrency—it was PENGU, the memecoin with an
        irresistible charm. But what set PENGU apart wasn’t just its adorable
        penguin mascot or the memes that flooded social media. No, PENGU had a
        unique origin story, one tied to the Kaspa blockchain and the mysterious
        KRC20 protocol.
      </div>
    </div>
  );
};
