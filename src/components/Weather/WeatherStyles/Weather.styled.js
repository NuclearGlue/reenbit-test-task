import styled from 'styled-components';
import bacgroundImg from './clouds-background.svg';
export const LongWeatherList = styled.ul`
  flex-wrap: wrap;
  display: flex;
`;

export const LongWeatherListItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const TodaysWeatherBlock = styled.div`
  display: flex;
  height: 100vh;
  width: 40%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  background-image: url(${bacgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  font-size: 24px;
`;

export const TodaysWeatherInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const TodaysWeatherTemp = styled.p`
  display: flex;
  font-size: 56px;
  font-weight: 700;
`;
export const TodaysWeatherTempC = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
export const TodaysWeatherDay = styled.h2`
  font-weight: 700;
  font-size: 40px;
`;

export const TodaysWeatherTimer = styled.ul`
  display: flex;
`;

export const TodaysWeatherTimerItem = styled.li`
  font-weight: 700;
  font-size: 30px;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;
export const TodaysWeatherTimerText = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
`;
