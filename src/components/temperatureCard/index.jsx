// import styles for this component
import './temperatureCard.css';

const TemperatureCard = ({
  className = '',
  tempValue = 20,
  date = '17th Jun 21',
  day = 'Thursday',
  time = '2:45 am'
}) => {
  return (
    <div className={`temperature-container ${className}`}>
      <div className="temperature-value d-flex">
        {tempValue}
        <span className="temperature-units-text">&#176; C</span>
      </div>

      <div className="temperature-date">{date}</div>
      <div className="temperature-day-time">
        {day} | {time}
      </div>
    </div>
  );
};

export default TemperatureCard;
