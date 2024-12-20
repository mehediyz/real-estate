import Button from "../components/Button";

const CallToAction = () => {
  return (
    <div className="bg-[url('/images/cto.png')] px-2 w-full h-[760px] bg-cover bg-center">
      <div className="flex flex-col items-center justify-center gap-8 h-full">
        <h1 className="h1 text-center">
          Discover a place you'll
          <br />
          love to live
        </h1>
        <p className="max-w-[500px] mx-auto text-center">
          Pellentesque egestas elementum egestas faucibus sem. Velit nunc
          egestas ut morbi. Leo diam diam
        </p>
        <Button
          variant={"accent"}
          classnames={"rounded-xl"}
          href={"#"}
          icon={"/images/icons/arrow.svg"}
        >
          View Properties
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
