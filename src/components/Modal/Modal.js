import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const ModalWindow = ({ onSubmit }) => {
  const [city, setCity] = useState('Berlin');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const reverseStartDate = startDate.split('-').reverse().join('.');
    const reverseEndDate = endDate.split('-').reverse().join('.');
    onSubmit({
      id: nanoid(),
      city,
      startDate: reverseStartDate,
      endDate: reverseEndDate,
    });
    reset();
  };

  const reset = () => {
    setCity('');
    setStartDate('');
    setEndDate('');
  };

  const handleInputChange = event => {
    if (event.currentTarget.name === 'city') {
      setCity(event.currentTarget.value);
    } else if (event.currentTarget.name === 'trip-start') {
      setStartDate(event.currentTarget.value);
    } else if (event.currentTarget.name === 'trip-end') {
      setEndDate(event.currentTarget.value);
    }
  };

  let toadyDate = new Date();

  return (
    <div>
      <h2>Create Trip</h2>
      <button type="button">Close</button>
      <form onSubmit={handleSubmit}>
        <label for="city">City</label>
        <select
          id="city"
          name="city"
          onChange={handleInputChange}
          value={city}
          required
        >
          <option value="Berlin">Berlin</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Kyiv">Kiyv</option>
          <option value="Istambul">Istambul</option>
          <option value="Mexico City">Mexico City</option>
          <option value="Madrid">Madrid</option>
          <option value="Rome">Rome</option>
        </select>
        <label for="start">Start date</label>
        <input
          type="date"
          id="start"
          name="trip-start"
          value={startDate}
          min={toadyDate.toISOString().split('T')[0]}
          max={
            new Date(toadyDate.getTime() + 15 * 24 * 60 * 60 * 1000)
              .toISOString()
              .split('T')[0]
          }
          onChange={handleInputChange}
          required
        ></input>

        <label for="end">End date</label>
        <input
          type="date"
          id="end"
          name="trip-end"
          value={endDate}
          min={toadyDate.toISOString().split('T')[0]}
          max={
            new Date(toadyDate.getTime() + 15 * 24 * 60 * 60 * 1000)
              .toISOString()
              .split('T')[0]
          }
          onChange={handleInputChange}
          required
        ></input>
        <button type="button">Cancel</button>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

ModalWindow.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
