import { HALF_CLOUD_ICON_SVG } from '../../assets/images';

// import style for this component
import './weatherIcon.css';

const WeatherIcon = ({ className = '', img = HALF_CLOUD_ICON_SVG, alt = 'half-cloud' }) => (
  <img src={img} className={`weather-icon ${className}`} alt={alt} />
);

export default WeatherIcon;
