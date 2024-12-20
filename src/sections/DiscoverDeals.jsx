import PropertyCard from "../components/PropertyCard";
import { propertyData } from "../constants";

const DiscoverDeals = () => {
  return (
    <section className="container mx-auto padding-t padding-b">
      <h2 className="h2 text-center ">Discover Our Best Deals</h2>
      <p className="text-center">Lorem ipsum dolor sit amet</p>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {propertyData.slice(0, 3).map((property) => (
          <PropertyCard
            key={property.id}
            badge={property.badge}
            imgUrl={property.imgUrl}
            title={property.title}
            address={property.address}
            count={property.count}
            price={property.price}
          />
        ))}
      </div>
    </section>
  );
};

export default DiscoverDeals;
