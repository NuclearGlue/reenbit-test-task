import axios from 'axios';

const API_KEY = '8YH9M6T3WFXTF4YHPKQCT9WLF';
axios.defaults.baseURL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

export const fetchForecast = async (city, startDate, endDate) => {
  const response = await axios
    .get('', {
      params: {
        key: API_KEY,
        location: city,
        date1: startDate,
        date2: endDate,
      },
    })
    .then(result => {
      return result.data;
    })
    .then(data => {
      return { today: data.currentConditions, allDays: data.days };
    });

  return response;
};
