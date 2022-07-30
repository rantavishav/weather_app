import { HUMIDITY_ICON_SVG, RAIN_ICON_SVG, WIND_ICON_SVG } from '../../assets/images';
import { RenderIf } from '../../utils';
import WeatherSingleStats from '../weatherSingleStats';

// import styles for this component
import './weatherStats.css';

const WeatherStats = ({ className = '', wind = '', humidity = '', rain = '' }) => (
  <div className={`d-flex justify-content-between align-items-center ${className}`}>
    <RenderIf isTrue={wind}>
      <WeatherSingleStats
        title="Wind"
        value={`${wind} km/h`}
        className="w-135"
        img={WIND_ICON_SVG}
        alt="wind"
      />
    </RenderIf>
    <RenderIf isTrue={humidity}>
      |
      <WeatherSingleStats
        title="Hum"
        value={`${humidity} %`}
        img={HUMIDITY_ICON_SVG}
        alt="humidity"
      />
    </RenderIf>
    <RenderIf isTrue={rain}>
      |
      <WeatherSingleStats title="Rain" value={`${rain} %`} img={RAIN_ICON_SVG} alt="rain" />
    </RenderIf>
  </div>
);

export default WeatherStats;
