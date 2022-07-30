import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { RenderIf } from '../../../utils';

// import styles for this component
import './searchOptions.css';

const SearchOptions = ({ handleOptionSelect = () => null }) => {
  const { locationList, errorMsg, isLoading } = useSelector((state) => state.weather.location);

  if (!locationList && !errorMsg && !isLoading) return null; // on inital loading
  return (
    <div className="w-100 search-result-box">
      {/* show Loading when api is called */}
      <RenderIf isTrue={isLoading}>
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status" variant="dark">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </RenderIf>

      <RenderIf isTrue={!isLoading}>
        <RenderIf isTrue={errorMsg && !locationList}>{errorMsg}</RenderIf>

        <RenderIf isTrue={locationList && locationList.length > 0}>
          {locationList?.map((location) => (
            <div
              className="search-result-content-container cursor-pointer"
              key={location.id}
              onClick={() => handleOptionSelect(location)}>
              <div className="search-result-content">{location.name || ''}</div>
            </div>
          ))}
        </RenderIf>

        <RenderIf isTrue={locationList && !(locationList.length > 0)}>No results found</RenderIf>
      </RenderIf>
    </div>
  );
};

export default SearchOptions;
