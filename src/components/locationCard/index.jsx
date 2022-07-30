const LocationCard = ({ location = '', className = '' }) => {
  return <div className={`mx-3 text-break ${className}`}>{location}</div>;
};

export default LocationCard;
