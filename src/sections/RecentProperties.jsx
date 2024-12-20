import PropertyCard from "../components/PropertyCard";
import { propertyData } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const RecentProperties = () => {
  return (
    <>
      <section className="container mx-auto padding-t padding-b">
        <h2 className="h2 text-center px-2">Recent Properties for Rent</h2>
        <p className="text-center py-4">Lorem ipsum dolor sit amet</p>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
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
        </div> */}
        <div className="mt-6 px-2">
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
              1280: {
                slidesPerView: 4,
              },
            }}
          >
            {propertyData.slice(4, 9).map((property) => (
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

      <section className="container mx-auto padding-b">
        <h2 className="h2 text-center px-2">Recent Properties for Sale</h2>
        <p className="text-center py-4">Lorem ipsum dolor sit amet</p>

        <div className="mt-6 px-2">
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
              1280: {
                slidesPerView: 4,
              },
            }}
          >
            {propertyData.slice(0, 6).map((property) => (
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
    </>
  );
};

export default RecentProperties;
