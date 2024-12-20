import DiscoverDeals from "./sections/DiscoverDeals";
import ExploreCities from "./sections/ExploreCities";
import Hero from "./sections/Hero";
import OurMission from "./sections/OurMission";
import OurProperties from "./sections/OurProperties";

function App() {
  return (
    <>
      <main>
        <Hero />
        <OurProperties />
        <OurMission />
        <DiscoverDeals />
        <ExploreCities />
      </main>
    </>
  );
}

export default App;
