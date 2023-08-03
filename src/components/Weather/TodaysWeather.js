import { useTimer } from '../../hooks/useTimer';

export const TodayWeather = ({ data, city, tourStart }) => {
  const [days, hours, minutes, seconds] = useTimer(tourStart);

  const dayOfWeek = () => {
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const d = new Date();
    let day = weekday[d.getDay()];

    return day;
  };

  const farenheitToCelsius = fahrenheit => {
    let celsius = ((fahrenheit - 32) * 5) / 9;
    return Math.round(celsius);
  };

  return (
    <div>
      <h2>{dayOfWeek()}</h2>
      <div>
        <img
          src={`./icons/${data.icon}.svg`}
          alt={data.icon}
          width={300}
          height={300}
        />

        <p>{farenheitToCelsius(data.temp)}C°</p>
      </div>
      <p>{city}</p>
      {days + hours + minutes + seconds <= 0 ? (
        <p>Have a nice trip!</p>
      ) : (
        <div id="countdown">
          <ul>
            <li>
              <span>{days}</span>DAYS
            </li>
            <li>
              <span>{hours}</span>HOURS
            </li>
            <li>
              <span>{minutes}</span>MINUTES
            </li>
            <li>
              <span>{seconds}</span>SECONDS
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
