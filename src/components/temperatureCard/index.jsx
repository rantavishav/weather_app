import moment from 'moment';

// import styles for this component
import './temperatureCard.css';

const TemperatureCard = ({ className = '', tempValue = 20, time = new Date() }) => {
  const dateString = `${moment(time)?.format('Do MMM YY')}`;
  const dayString = `${moment(time)?.format('dddd')}`;
  const timeString = `${moment(time)?.format('h:mm A')}`;

  if (!moment(time).isValid()) return null; //error handling for invalid date
  return (
    <div className={`temperature-container ${className}`}>
      <div className="temperature-value d-flex">
        {tempValue.toFixed(0)}
        <span className="temperature-units-text">&#176; C</span>
      </div>

      <div className="temperature-date">{dateString}</div>
      <div className="temperature-day-time">
        {dayString} | {timeString}
      </div>
    </div>
  );
};

export default TemperatureCard;
