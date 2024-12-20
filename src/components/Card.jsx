const Card = ({ variant, title, subtitle, imgUrl }) => {
  return (
    <>
      {variant == "properties" && (
        <div
          className={`relative p-4 md:p-6 border rounded-xl  overflow-hidden bg-cover bg-center aspect-[3/4] hover:shadow-md transition-all duration-500 cursor-pointer group hover:text-white`}
          style={{ backgroundImage: `url('${imgUrl}')` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500"></div>

          {/* Content */}
          <div className="relative z-10">
            <h4 className="h4">{title}</h4>
            <span className="p3">{subtitle}</span>
          </div>
        </div>
      )}

      {variant == "cities" && (
        <div className="">
          <div
            className={`relative p-4 md:p-6 border rounded-xl  overflow-hidden bg-cover bg-center aspect-[3/4] hover:shadow-md transition-all duration-500 cursor-pointer group hover:text-white`}
            style={{ backgroundImage: `url('${imgUrl}')` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500"></div>
          </div>
          {/* Content */}
          <div className="mt-2">
            <span className="p3">{subtitle}</span>
            <a href="#" className="h4 block">
              {title}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
