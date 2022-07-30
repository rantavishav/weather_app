import { HUMIDITY_ICON_SVG } from '../../assets/images';

// import styles for this component
import './weatherSingleStats.css';

const WeatherSingleStats = ({
  className = '',
  title = '',
  value = '',
  img = HUMIDITY_ICON_SVG,
  alt = 'humidity'
}) => (
  <div className={`weather-stats-item ${className}`}>
    <img src={img} alt={alt} className="weather-stats-icon" />
    <div className="weather-stats-text">{title}</div>
    <div className="weather-stats-value">{value}</div>
  </div>
);
export default WeatherSingleStats;
