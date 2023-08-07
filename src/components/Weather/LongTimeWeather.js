import { DayWeather } from './DayWeather/DayWeather';
import { nanoid } from 'nanoid';
import { LongWeatherList } from './WeatherStyles/Weather.styled';

export const LongTimeWeather = ({ data }) => {
  return (
    <div>
      <h2>Trip Weather</h2>
      <LongWeatherList>
        {data.map(day => (
          <DayWeather key={nanoid()} info={day} />
        ))}
      </LongWeatherList>
    </div>
  );
};
