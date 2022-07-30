import { useSelector } from 'react-redux';

import { CLOUDY_ICON_SVG, HALF_CLOUD_ICON_SVG } from '../../assets/images';
import {
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
  const { weatherDetail } = useSelector((state) => state.weather.weather);

  return (
    <div className="home-main-container">
      <div className="home-header d-flex justify-content-between align-items-center">
        <WeatherIcon
          className={weatherDetail ? '' : 'invisible'}
          img={weatherDetail?.current?.condition?.icon || HALF_CLOUD_ICON_SVG}
          alt={weatherDetail?.current?.condition?.text || 'half-cloud'}
        />
        <SearchBar />
      </div>

      <RenderIf isTrue={!weatherDetail}>
        <div className="home-loading-container">Please Search for a city</div>
      </RenderIf>
      <div className={weatherDetail ? '' : 'invisible'}>
        <TemperatureCard className="mb-4" />
        <WeatherStats className="mb-4" />

        <div className="d-flex justify-content-between align-items-center">
          <WeatherCard tempValue="20" img={CLOUDY_ICON_SVG} day="Fri" />
          <WeatherCard tempValue="20" img={CLOUDY_ICON_SVG} day="Fri" />
          <WeatherCard tempValue="20" img={CLOUDY_ICON_SVG} day="Fri" />
          <WeatherCard tempValue="20" img={CLOUDY_ICON_SVG} day="Fri" />
        </div>
      </div>
    </div>
  );
};

export default Home;
