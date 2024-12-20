import PropertyCard from "../components/PropertyCard";
import { propertyData } from "../constants";

const RecentProperties = () => {
  return (
    <>
      <section className="container mx-auto padding-b">
        <h2 className="h2 text-center px-2">Recent Properties for Rent</h2>
        <p className="text-center py-4">Lorem ipsum dolor sit amet</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
          {propertyData.slice(0, 4).map((property) => (
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

      <section className="container mx-auto padding-b">
        <h2 className="h2 text-center px-2">Recent Properties for Sale</h2>
        <p className="text-center py-4">Lorem ipsum dolor sit amet</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
          {propertyData.slice(5, 9).map((property) => (
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
    </>
  );
};

export default RecentProperties;
