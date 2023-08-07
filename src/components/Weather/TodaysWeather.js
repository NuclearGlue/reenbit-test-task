import { useTimer } from '../../hooks/useTimer';
import {
  TodaysWeatherBlock,
  TodaysWeatherInfo,
  TodaysWeatherTimer,
  TodaysWeatherTimerText,
  TodaysWeatherTimerItem,
  TodaysWeatherDay,
  TodaysWeatherTemp,
  TodaysWeatherTempC,
} from './WeatherStyles/Weather.styled';

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

  if (tourStart) {
    return (
      <TodaysWeatherBlock>
        <TodaysWeatherDay>{dayOfWeek()}</TodaysWeatherDay>
        <TodaysWeatherInfo>
          <img
            src={`./icons/${data.icon}.svg`}
            alt={data.icon}
            width={100}
            height={100}
          />

          <TodaysWeatherTemp>
            {farenheitToCelsius(data.temp)}
            <TodaysWeatherTempC>C°</TodaysWeatherTempC>
          </TodaysWeatherTemp>
        </TodaysWeatherInfo>
        <p>{city}</p>
        {days + hours + minutes + seconds <= 0 ? (
          <p>Have a nice trip!</p>
        ) : (
          <TodaysWeatherTimer>
            <TodaysWeatherTimerItem>
              <span>{days}</span>
              <TodaysWeatherTimerText>Days</TodaysWeatherTimerText>
            </TodaysWeatherTimerItem>
            <TodaysWeatherTimerItem>
              <span>{hours}</span>
              <TodaysWeatherTimerText>Hours</TodaysWeatherTimerText>
            </TodaysWeatherTimerItem>
            <TodaysWeatherTimerItem>
              <span>{minutes}</span>
              <TodaysWeatherTimerText>Minutes</TodaysWeatherTimerText>
            </TodaysWeatherTimerItem>
            <TodaysWeatherTimerItem>
              <span>{seconds}</span>
              <TodaysWeatherTimerText>Seconds</TodaysWeatherTimerText>
            </TodaysWeatherTimerItem>
          </TodaysWeatherTimer>
        )}
      </TodaysWeatherBlock>
    );
  }
};
