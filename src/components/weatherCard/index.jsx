// import styles for this component
import { CLOUDY_ICON_SVG } from '../../assets/images';
import './weatherCard.css';

const WeatherCard = ({ tempValue = '', img = CLOUDY_ICON_SVG, day = '' }) => {
  return (
    <div className="weather-card-container">
      <div className="weather-card-value">{tempValue} &#176; C</div>
      <div className="weather-card-img">
        <img src={img} alt="cloudy" />
      </div>
      <div className="weather-card-day">{day}</div>
    </div>
  );
};

export default WeatherCard;
