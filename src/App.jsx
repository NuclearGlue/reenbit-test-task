import './App.css';
import { useState, useEffect } from 'react';

import { ModalWindow } from './components/Modal/Modal';
import { Searchbar } from './components/Tours/Searchbar';
import { ToursList } from './components/Tours/ToursList';

function App() {
  const [tours, setTours] = useState(!localStorage.getItem("tours")
    ?[
    {
      id: "id1",
      city: "Mexico City",
      startDate: "01.09.2023",
      endDate: "01.09.2024"
    },
    {
      id: 'id2',
      city: 'Madrid',
      startDate: '01.09.2023',
      endDate: '15.09.2023'
    }
    ]
    :JSON.parse(localStorage.getItem("tours"))
  );
  const [filter, setFilter] = useState('');
  const [modalOpen, setModalOpen] =useState(false)

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
  
  return (
    <div className="App">
      <h1>Weather Forecast</h1>

      <Searchbar filter={filter} changeFilter={changeFilter} />
      <ToursList tours={getVisibleTours()} toggleModal={toggleModal} />
      {modalOpen && <ModalWindow onSubmit={addTours} />}
    </div>
  );
}

export default App;
