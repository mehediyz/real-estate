import Card from "../components/Card";
import { exploreCities } from "../constants";

const ExploreCities = () => {
  return (
    <section className="bg-grey-1 px-4 padding-b">
      <div className="container mx-auto">
        <h2 className="h2 text-center ">Explore Cities</h2>
        <p className="text-center py-4">Lorem ipsum dolor sit amet</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
          {exploreCities.map((property) => (
            <Card
              variant={"cities"}
              key={property.title}
              imgUrl={property.imgUrl}
              title={property.title}
              subtitle={property.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCities;
