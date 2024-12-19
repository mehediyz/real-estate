import OurMissionCard from "../components/OurMissionCard";
import { ourMission } from "../constants";

const OurMission = () => {
  return (
    <section className="container mx-auto padding-b">
      <h2 className="h2 text-center max-w-[660px] mx-auto">
        Our mission is to redefine real estate in the customer's favor.
      </h2>
      <p className="text-center py-4">Lorem ipsum dolor sit amet</p>
      <div className="grid grid-cols-4 gap-4 mt-6">
        {ourMission.map((mission) => (
          <OurMissionCard
            key={mission.title}
            count={mission.count}
            title={mission.title}
            description={mission.description}
          />
        ))}
      </div>
    </section>
  );
};

export default OurMission;
