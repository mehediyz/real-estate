import Button from "../components/Button";

const WhyUs = () => {
  return (
    <section className="container mx-auto padding-t padding-b">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 xl:gap-20 items-center">
        <div className="relative bg-[url('/images/h30.png')] w-full bg-cover bg-center aspect-square rounded-none sm:rounded-xl order-2 lg:order-1">
          <div className="absolute bg-white py-4 px-6 rounded-xl left-5 top-5 flex gap-4 items-center">
            <img
              src={"/images/icons/meet.svg"}
              alt="clients"
              className="bg-primary-2/10 rounded-full p-2"
            />
            <div className="flex flex-col">
              <span className="p3">Total Clients</span>
              <span className="h4">7,000 M</span>
            </div>
          </div>
        </div>
        <div className="space-y-4 px-2 order-1 lg:order-2">
          <h2 className="h2 text-center lg:text-left">
            Why You Should Work <br /> With Us
          </h2>
          <p className="text-center sm:text-left">
            Pellentesque egestas elementum egestas faucibus sem. Velit nunc
            egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium.
            Mi mauris nulla ac dictum ut mauris non.
          </p>
          <div className="flex gap-4 md:gap-8 py-4">
            <div className="space-y-2 border-l-4 pl-2 hover:border-accent-1 hover:pl-2 transition-all duration-200 ">
              <h3 className="h4">Buy or Rent Homes</h3>
              <p className="p3">
                We sell your home at the best market price and very quickly as
                well.
              </p>
            </div>
            <div className="space-y-2 border-l-4 pl-2 hover:border-accent-1 hover:pl-2 transition-all duration-200 ">
              <h3 className="h4">Trusted by Thousands</h3>
              <p className="p3">
                We offer you free consultancy to get a loan for your new home.
              </p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <Button
              variant={"accent"}
              icon={"/images/icons/arrow.svg"}
              classnames={"rounded-xl"}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
