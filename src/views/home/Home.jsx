import { CLOUDY_ICON_SVG } from '../../assets/images';
import {
  SearchBar,
  TemperatureCard,
  WeatherCard,
  WeatherIcon,
  WeatherStats
} from '../../components';

// import css for this page
import './Home.css';

const Home = () => {
  return (
    <div className="home-main-container">
      <div className="home-header d-flex justify-content-between align-items-center">
        <WeatherIcon />
        <SearchBar />
      </div>
      <TemperatureCard className="mb-4" />
      <WeatherStats className="mb-4" />

      <div className="d-flex justify-content-between align-items-center">
        <WeatherCard tempValue="20" img={CLOUDY_ICON_SVG} day="Fri" />
        <WeatherCard tempValue="20" img={CLOUDY_ICON_SVG} day="Fri" />
        <WeatherCard tempValue="20" img={CLOUDY_ICON_SVG} day="Fri" />
        <WeatherCard tempValue="20" img={CLOUDY_ICON_SVG} day="Fri" />
      </div>
    </div>
  );
};

export default Home;
