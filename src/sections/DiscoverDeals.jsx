import PropertyCard from "../components/PropertyCard";
import { propertyData } from "../constants";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const DiscoverDeals = () => {
  return (
    <section className="container mx-auto padding-b">
      <h2 className="h2 text-center px-2">Discover Our Best Deals</h2>
      <p className="text-center">Lorem ipsum dolor sit amet</p>
      <div className="mt-6">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {propertyData.slice(0, 5).map((property) => (
            <SwiperSlide key={property.id}>
              <PropertyCard
                key={property.id}
                badge={property.badge}
                imgUrl={property.imgUrl}
                title={property.title}
                address={property.address}
                count={property.count}
                price={property.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DiscoverDeals;
