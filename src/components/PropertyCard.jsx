const PropertyCard = ({ badge, title, address, count, price, imgUrl }) => {
  return (
    <div className="bg-white rounded-xl hover:shadow-md transition-all duration-200">
      <div
        className={`relative p-6 border rounded-t-xl overflow-hidden bg-cover bg-center aspect-[4/3] hover:shadow-md transition-all duration-500 cursor-pointer group hover:text-white`}
      >
        {/* Scaled Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url('${imgUrl}')` }}
        ></div>

        {/* Badge */}
        <div className="relative z-10 space-x-2">
          {badge &&
            badge.map((item, idx) => (
              <span
                key={idx}
                className="p3 bg-accent-2 rounded-full text-white py-1 px-4 uppercase"
                style={{
                  backgroundColor: item.color[0],
                  color: item.color[1],
                }}
              >
                {item.value}
              </span>
            ))}
        </div>
      </div>
      {/* Content */}
      <div>
        <div className="p-4 mb-2">
          <a href="#" className="h4 block">
            {title}
          </a>
          <div className="flex items-center gap-2">
            <img src="/images/icons/location.png" alt="location" />
            <span className="p3">{address}</span>
          </div>
        </div>

        <div className="border-t border-grey-3 py-2">
          <div className="flex justify-between px-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <img src="/images/icons/bed.png" alt="location" />
                <span className="p3">{count.bedroom}</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/images/icons/bath.png" alt="bath" />
                <span className="p3">{count.bathroom}</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/images/icons/area.png" alt="area" />
                <span className="p3">{count.area}</span>
              </div>
            </div>
            <div>
              <span className="h3 text-primary-2">{price[0]}</span>
              {price[1] && <span className=" text-primary-2">/{price[1]}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
