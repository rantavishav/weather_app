import { useSelector } from 'react-redux';

import { CLOUDY_ICON_SVG, HALF_CLOUD_ICON_SVG } from '../../assets/images';
import {
  LocationCard,
  SearchBar,
  TemperatureCard,
  WeatherCard,
  WeatherIcon,
  WeatherStats
} from '../../components';
import { RenderIf } from '../../utils';

// import css for this page
import './Home.css';

const Home = () => {
  const { weatherDetail, errorMsg } = useSelector((state) => state.weather.weather);

  return (
    <div className="home-main-container">
      <div className="home-header d-flex justify-content-between align-items-center">
        <WeatherIcon
          className={weatherDetail ? '' : 'invisible'}
          img={weatherDetail?.current?.condition?.icon || HALF_CLOUD_ICON_SVG}
          alt={weatherDetail?.current?.condition?.text || 'half-cloud'}
        />
        <LocationCard
          location={
            weatherDetail?.location?.name && weatherDetail?.location?.region
              ? `${weatherDetail?.location?.name}, ${weatherDetail?.location?.region}`
              : ''
          }
          className={weatherDetail ? '' : 'invisible'}
        />
        <SearchBar />
      </div>

      {/* Fallback until city is not searched/selected  */}
      <RenderIf isTrue={!weatherDetail && !errorMsg}>
        <div className="home-loading-container">Please Search for a city</div>
      </RenderIf>

      {/* Fallback if Api fails to fetch current city data */}
      <RenderIf isTrue={!weatherDetail && errorMsg}>
        <div className="home-loading-container">{errorMsg}</div>
      </RenderIf>

      {/* render only if weatherDetail is coming from API*/}
      <div className={weatherDetail ? '' : 'invisible'}>
        {/* temperature and date and time section */}
        <TemperatureCard
          className="mb-4"
          tempValue={weatherDetail?.current?.temp_c || ''}
          time={weatherDetail?.current?.last_updated || ''}
        />

        {/* rain, humidity and wind stats  */}
        <WeatherStats
          className="mb-4"
          wind={weatherDetail?.current?.wind_kph?.toFixed(0) || ''}
          humidity={weatherDetail?.current?.humidity?.toFixed(0) || ''}
          rain={weatherDetail?.current?.precip_mm?.toFixed(0) || ''}
        />

        {/* three-days forcast */}
        <div className="d-flex justify-content-between align-items-center">
          <WeatherCard tempValue="20" img={CLOUDY_ICON_SVG} day="Fri" />
          <WeatherCard tempValue="20" img={CLOUDY_ICON_SVG} day="Fri" />
          <WeatherCard tempValue="20" img={CLOUDY_ICON_SVG} day="Fri" />
        </div>
      </div>
    </div>
  );
};

export default Home;
