import "./App.css";
import { CarouselSection } from "./components/CarouselSection";
import { HelloSection } from "./components/HelloSection";
import { Layout } from "./components/Layout";
import { RoadMap } from "./components/Rodamap";
import { Story } from "./components/Story";
import { Tokenomics } from "./components/Tokenomics";

function App() {
  return (
    <Layout>
      <HelloSection />
      <CarouselSection />
      <Story />
      <Tokenomics />
      <RoadMap />
    </Layout>
  );
}

export default App;
