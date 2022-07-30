import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

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
  const {
    weatherDetail,
    errorMsg,
    isLoading: weatherDetailsLoading
  } = useSelector((state) => state.weather.weather);
  const { threeDayForcastList, isLoading: forCastLoading } = useSelector(
    (state) => state.weather.forcast
  );

  return (
    <div className="home-main-container">
      <div className="home-header d-flex justify-content-between align-items-center">
        <WeatherIcon
          className={weatherDetail ? '' : 'invisible'}
          img={weatherDetail?.current?.condition?.icon || ''}
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

      <RenderIf isTrue={weatherDetailsLoading}>
        <div className="vh-50 d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status" variant="dark">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </RenderIf>
      <RenderIf isTrue={!weatherDetailsLoading}>
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
          <div
            className={`d-flex align-items-center ${
              forCastLoading ? 'justify-content-center' : 'justify-content-between'
            }`}>
            <RenderIf isTrue={forCastLoading}>
              <Spinner animation="border" role="status" variant="dark">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </RenderIf>

            <RenderIf isTrue={!forCastLoading && threeDayForcastList?.length > 0}>
              {threeDayForcastList?.map((day) => (
                <WeatherCard
                  tempValue={day?.day?.avgtemp_c || ''}
                  img={day?.day?.condition?.icon || ''}
                  alt={day?.day?.condition?.icon || ''}
                  day={day?.date || ''}
                  key={day.date_epoch}
                />
              ))}
            </RenderIf>

            <RenderIf isTrue={!forCastLoading && !(threeDayForcastList?.length > 0)}>
              No forcast data available
            </RenderIf>
          </div>
        </div>
      </RenderIf>
    </div>
  );
};

export default Home;
