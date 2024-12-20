const Logos = () => {
  return (
    <section className="container mx-auto space-y-6 pb-24">
      <p className="p3 text-center text-black/70">
        Thousands of the world's leading companies trust Space
      </p>
      <div className="relative overflow-hidden">
        <div className="flex gap-20 items-center animate-marquee whitespace-nowrap">
          <img src={"/images/logos/1.png"} alt="logo" className="h-6" />
          <img src={"/images/logos/2.png"} alt="logo" className="h-6" />
          <img src={"/images/logos/3.png"} alt="logo" className="h-6" />
          <img src={"/images/logos/4.png"} alt="logo" className="h-6" />
          <img src={"/images/logos/5.png"} alt="logo" className="h-6" />
          <img src={"/images/logos/6.png"} alt="logo" className="h-6" />
          {/* Duplicate logos for seamless looping */}
          <img src={"/images/logos/1.png"} alt="logo" className="h-6" />
          <img src={"/images/logos/2.png"} alt="logo" className="h-6" />
          <img src={"/images/logos/3.png"} alt="logo" className="h-6" />
          <img src={"/images/logos/4.png"} alt="logo" className="h-6" />
          <img src={"/images/logos/5.png"} alt="logo" className="h-6" />
          <img src={"/images/logos/6.png"} alt="logo" className="h-6" />
        </div>
      </div>
    </section>
  );
};

export default Logos;
