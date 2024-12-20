import CallToAction from "./sections/CallToAction";
import DiscoverDeals from "./sections/DiscoverDeals";
import ExploreCities from "./sections/ExploreCities";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import OurMission from "./sections/OurMission";
import OurProperties from "./sections/OurProperties";
import RecentProperties from "./sections/RecentProperties";

function App() {
  return (
    <>
      <main>
        <Hero />
        <OurProperties />
        <OurMission />
        <DiscoverDeals />
        <ExploreCities />
        <RecentProperties />
        <HowItWorks />
        <CallToAction />
      </main>
    </>
  );
}

export default App;
