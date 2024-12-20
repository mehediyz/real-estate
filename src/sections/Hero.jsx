import { useState } from "react";
import Search from "../components/Search";

const Hero = () => {
  const [activeButton, setActiveButton] = useState("Sale");
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
          {/* Sale Button */}
          <button
            className={`border-b-4 ${
              activeButton === "Sale"
                ? "border-black"
                : "border-transparent hover:border-black/40"
            } transition-all duration-200`}
            onClick={() => setActiveButton("Sale")}
          >
            Sale
          </button>

          {/* Rent Button */}
          <button
            className={`border-b-4 ${
              activeButton === "Rent"
                ? "border-black"
                : "border-transparent hover:border-black/40"
            } transition-all duration-200`}
            onClick={() => setActiveButton("Rent")}
          >
            Rent
          </button>
        </div>

        {/* Display Different Search or Content Based on Active Button */}
        {activeButton === "Sale" ? (
          <Search placeholder="Search properties for sale..." />
        ) : (
          <Search placeholder="Search properties for rent..." />
        )}
      </div>
    </div>
  );
};

export default Hero;
