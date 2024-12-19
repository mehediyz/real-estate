const OurMissionCard = ({ title, description, count }) => {
  return (
    <div className="bg-grey-1 p-6 rounded-xl space-y-2 hover:shadow-md transition-all duration-200">
      <span className="h2 text-primary-2 block pb-4">{count}</span>
      <h4 className="h3">{title}</h4>
      <p className="p3">{description}</p>
    </div>
  );
};

export default OurMissionCard;
