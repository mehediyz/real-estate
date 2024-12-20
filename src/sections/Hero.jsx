import Search from "../components/Search";

const Hero = () => {
  return (
    <div className="bg-[url('/images/hero.jpg')] w-full min-h-[600px] h-screen px-2 bg-cover bg-center">
      <div className="flex flex-col items-center justify-center gap-8 h-full">
        <h1 className="h1 text-center">
          The <span className="text-accent-1">#1</span> site real estate
          <br />
          professionals trust*
        </h1>
        <p className="text-center">
          From as low as $10 per day with limited time offer discounts.
        </p>
        <div className="flex gap-6">
          <button className="border-b-4 border-black/40">Sale</button>
          <button className="border-b-4 hover:border-b-4 hover:border-black/40 transition-all duration-200">
            Rent
          </button>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Hero;
