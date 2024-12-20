import { howItWorks } from "../constants";

const HowItWorks = () => {
  return (
    <section className="container mx-auto padding-b">
      <h2 className="h2 text-center px-2">How It works? Find a perfect home</h2>
      <p className="text-center py-4">Lorem ipsum dolor sit amet</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-4 mt-6">
        <div className="max-w-[550px] flex flex-col gap-4 lg:gap-8 xl:gap-12 items-start order-2 lg:order-1 px-6 ">
          {howItWorks.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 items-center text-center lg:text-left lg:items-start p-4 hover:shadow-md transition-all duration-200 rounded-r-xl border-l-2 border-transparent hover:border-accent-1"
            >
              <img src={item.icon} alt={item.title} />
              <h3 className="h4">{item.title}</h3>
              <p className="p3">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[url('/images/h30.png')] bg-cover bg-center rounded-xl aspect-square w-full order-1 lg:order-2"></div>
      </div>
    </section>
  );
};

export default HowItWorks;
