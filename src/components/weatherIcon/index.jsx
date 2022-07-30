import { HALF_CLOUD_ICON_SVG } from '../../assets/images';

// import style for this component
import './weatherIcon.css';

const WeatherIcon = ({ img = HALF_CLOUD_ICON_SVG, alt = 'half-cloud' }) => (
  <img src={img} className="weather-icon" alt={alt} />
);

export default WeatherIcon;
