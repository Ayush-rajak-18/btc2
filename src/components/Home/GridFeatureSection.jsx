// DestinationCard.jsx
const DestinationCard = ({ imageUrl, title, description }) => {
  return (
    <div className="aspect-video">
      <div
        className={`aspect-video rounded-lg bg-[url('${imageUrl}')] mb-3 bg-cover bg-center bg-no-repeat`}
      ></div>
      <div>
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
      <div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const GridFeatureSection = ({
  destinations,
  heading,
  subHeading,
  margintop = "mt-8",
}) => {
  return (
    <div className="flex w-full flex-col py-8">
      <div className="mb-2">
        <h1 className="text-lg font-semibold">{heading}</h1>
      </div>
      <div className="max-w-xl">
        <p className="text-sm text-gray-600">{subHeading}</p>
      </div>
      <div
        className={`${margintop} grid grid-flow-dense content-evenly gap-5 lg:grid-flow-col-dense`}
      >
        {destinations?.map((destination, index) => (
          <DestinationCard
            key={index}
            imageUrl={destination.imageUrl}
            title={destination.title}
            description={destination.description}
          />
        ))}
      </div>
    </div>
  );
};

export default GridFeatureSection;
