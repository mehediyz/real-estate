import Card from "../components/Card";
import { ourProperties } from "../constants";

const OurProperties = () => {
  return (
    <section className="container mx-auto padding-t padding-b">
      <h2 className="h2 text-center ">Explore Our Properties</h2>
      <p className="text-center">Lorem ipsum dolor sit amet</p>
      <div className="grid grid-cols-5 gap-4 mt-6">
        {ourProperties.map((property) => (
          <Card
            key={property.title}
            imgUrl={property.imgUrl}
            title={property.title}
            subtitle={property.count}
          />
        ))}
      </div>
    </section>
  );
};

export default OurProperties;
