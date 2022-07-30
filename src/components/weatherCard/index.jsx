import moment from 'moment';

import { RenderIf } from '../../utils';

// import styles for this component
import './weatherCard.css';

const WeatherCard = ({ tempValue = '', img = '', alt = '', day = '' }) => {
  return (
    <div className="weather-card-container">
      <RenderIf isTrue={tempValue}>
        <div className="weather-card-value">{tempValue} &#176; C</div>
      </RenderIf>

      <RenderIf isTrue={img}>
        <div className="weather-card-img">
          <img src={img} alt={alt} />
        </div>
      </RenderIf>
      <RenderIf isTrue={moment(day).isValid()}>
        <div className="weather-card-day">{moment(day).format('ddd')}</div>
      </RenderIf>
    </div>
  );
};

export default WeatherCard;
