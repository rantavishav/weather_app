import { SearchBar, TemperatureCard, WeatherIcon } from '../../components';

// import css for this page
import './Home.css';

const Home = () => {
  return (
    <div className="home-main-container">
      <div className="home-header d-flex justify-content-between align-items-center">
        <WeatherIcon />
        <SearchBar />
      </div>
      <TemperatureCard />
    </div>
  );
};

export default Home;
