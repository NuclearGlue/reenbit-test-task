import { DayWeather } from './DayWeather/DayWeather';
import { nanoid } from 'nanoid';

export const LongTimeWeather = ({ data }) => {
  return (
    <div>
      <h2>Trip Weather</h2>
      <ul>
        {data.map(day => (
          <DayWeather key={nanoid()} info={day} />
        ))}
      </ul>
    </div>
  );
};
