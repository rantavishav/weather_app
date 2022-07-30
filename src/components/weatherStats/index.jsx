import { HUMIDITY_ICON_SVG, RAIN_ICON_SVG, WIND_ICON_SVG } from '../../assets/images';
import WeatherSingleStats from '../weatherSingleStats';

// import styles for this component
import './weatherStats.css';

const WeatherStats = ({ className = '' }) => (
  <div className={`d-flex justify-content-between align-items-center ${className}`}>
    <WeatherSingleStats
      title="Wind"
      value="10km/h"
      className="w-135"
      img={WIND_ICON_SVG}
      alt="wind"
    />
    |
    <WeatherSingleStats title="Hum" value="80%" img={HUMIDITY_ICON_SVG} alt="humidity" />
    |
    <WeatherSingleStats title="Rain" value="0.2%" img={RAIN_ICON_SVG} alt="rain" />
  </div>
);

export default WeatherStats;
