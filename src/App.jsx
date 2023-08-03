import './App.css';
import { useState, useEffect } from 'react';

import { ModalWindow } from './components/Modal/Modal';
import { Searchbar } from './components/Tours/Searchbar';
import { ToursList } from './components/Tours/ToursList';
import { LongTimeWeather } from './components/Weather/LongTimeWeather';
import { TodayWeather } from './components/Weather/TodaysWeather';
import { fetchForecast } from './components/helpers/fetchForecast';

function App() {
  const [tours, setTours] = useState(!localStorage.getItem("tours")
    ?[
    {
      id: "id1",
      city: "Mexico City",
      startDate: "01.08.2023",
      endDate: "14.08.2023"
    },
    {
      id: 'id2',
      city: 'Madrid',
      startDate: '01.08.2023',
      endDate: '15.08.2023'
    }
    ]
    :JSON.parse(localStorage.getItem("tours"))
  );
  const [filter, setFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [todayWeather, setTodayWeather] = useState({});
  const [allWeather, setAllWeather] = useState({});
  const [currentCity, setCurrentCity] = useState('');
  const [tourStart, setTourStart] = useState('');
  
  useEffect(() => {
    const toursStorage = JSON.parse(localStorage.getItem('tours'))
    if (toursStorage) {
     setTours(toursStorage);
   }
    
  }, []);

useEffect(() => {
  if (tours?.length) {
    localStorage.setItem('tours', JSON.stringify(tours));
  }
    
}, [tours]);
  
  const addTours = data => {
    console.log('Adding tour:', data);
    setTours([data, ...tours]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleTours = () => {
    const filterNormalized = filter.toLowerCase();

    return tours.filter(tour =>
      tour.city.toLowerCase().includes(filterNormalized),
    );
  };

  const toggleModal = () => {
setModalOpen(!modalOpen)
  }
  
   const getForecast = async (city, startDate, endDate) => {
     const weatherInfo = await fetchForecast(city, startDate, endDate);
     setTodayWeather(weatherInfo.today)
     setAllWeather(weatherInfo.allDays)
     setCurrentCity(city)
setTourStart(startDate)
     console.log(weatherInfo)
   };
  
  return (
    <div className="App">
      <div>
      <h1>Weather Forecast</h1>
      <Searchbar filter={filter} changeFilter={changeFilter} />
      <ToursList tours={getVisibleTours()} toggleModal={toggleModal} getForecast={getForecast} />
        {currentCity!==''&&<LongTimeWeather data={allWeather} />}
        {modalOpen && <ModalWindow onSubmit={addTours} />}
      </div>
      <TodayWeather data={todayWeather} city={currentCity} tourStart={tourStart} />
    </div>
  );
}

export default App;
