import { useSelector } from 'react-redux';
import { RenderIf } from '../../../utils';

// import styles for this component
import './searchOptions.css';

const SearchOptions = ({ handleOptionSelect = () => null }) => {
  const { locationList } = useSelector((state) => state.weather.location);

  if (!locationList) return null;
  return (
    <div className="w-100 search-result-box">
      <RenderIf isTrue={locationList.length > 0}>
        {locationList?.map((location) => (
          <div
            className="search-result-content-container cursor-pointer"
            key={location.id}
            onClick={() => handleOptionSelect(location)}>
            <div className="search-result-content">{location.name || ''}</div>
          </div>
        ))}
      </RenderIf>

      <RenderIf isTrue={!(locationList.length > 0)}>No results found</RenderIf>
    </div>
  );
};

export default SearchOptions;
