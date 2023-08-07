import { LongWeatherListItem } from '../WeatherStyles/Weather.styled';

export const DayWeather = ({ info }) => {
  const dayOfWeek = date => {
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const d = new Date(date);
    let day = weekday[d.getDay()];

    return day;
  };

  const farenheitToCelsius = fahrenheit => {
    let celsius = ((fahrenheit - 32) * 5) / 9;
    return Math.round(celsius);
  };

  return (
    <LongWeatherListItem>
      <p>{dayOfWeek(info.datetime)}</p>
      <img
        src={`./icons/${info.icon}.svg`}
        alt={info.icon}
        width={50}
        height={50}
      />
      <p>
        {farenheitToCelsius(info.tempmax)}°/{farenheitToCelsius(info.tempmin)}°
      </p>
    </LongWeatherListItem>
  );
};
