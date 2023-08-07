import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  ModalWindow,
  ModalBlock,
  ModalTitle,
  ModalForm,
  ModalSelect,
  ModalLabel,
  ModalInput,
  ModalButtonsBlock,
  CrossModal,
  ModalCrossClose,
  ModalButtonCancel,
  ModalButtonSave,
} from './Modal.styled';

export const Modal = ({ onSubmit, closeModal }) => {
  let toadyDate = new Date();
  const [city, setCity] = useState('Berlin');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [maxDate, setMaxDate] = useState('');

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
    closeModal();
  };

  const handleCityChange = event => {
    setCity(event.currentTarget.value);
  };

  const handleStartDateChange = event => {
    const newStartDate = event.currentTarget.value;
    setStartDate(newStartDate);

    const maxEndDate = new Date(newStartDate);

    setMaxDate(
      new Date(maxEndDate.getTime() + 15 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0],
    );
  };

  const handleEndDateChange = event => {
    setEndDate(event.target.value);
  };

  return (
    <ModalWindow>
      <ModalBlock>
        <ModalTitle>
          <h2>Create trip</h2>
          <ModalCrossClose type="button" onClick={closeModal}>
            <CrossModal />
          </ModalCrossClose>
        </ModalTitle>
        <ModalForm onSubmit={handleSubmit}>
          <ModalLabel for="city">City</ModalLabel>
          <ModalSelect
            id="city"
            name="city"
            onChange={handleCityChange}
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
          </ModalSelect>
          <ModalLabel>Start date</ModalLabel>
          <ModalInput
            type="text"
            id="start"
            name="trip-start"
            value={startDate}
            min={toadyDate.toISOString().split('T')[0]}
            max={
              new Date(toadyDate.getTime() + 15 * 24 * 60 * 60 * 1000)
                .toISOString()
                .split('T')[0]
            }
            onChange={handleStartDateChange}
            placeholder="Select date"
            onFocus={e => (e.target.type = 'date')}
            onBlur={e => (e.target.type = 'text')}
            required
          ></ModalInput>

          <ModalLabel>End date</ModalLabel>
          <ModalInput
            type="text"
            id="end"
            name="trip-end"
            value={endDate}
            min={toadyDate.toISOString().split('T')[0]}
            max={maxDate}
            onChange={handleEndDateChange}
            placeholder="Select date"
            onFocus={e => (e.target.type = 'date')}
            onBlur={e => (e.target.type = 'text')}
            required
          ></ModalInput>
          <ModalButtonsBlock>
            <ModalButtonCancel type="button" onClick={closeModal}>
              Cancel
            </ModalButtonCancel>
            <ModalButtonSave type="submit">Save</ModalButtonSave>
          </ModalButtonsBlock>
        </ModalForm>
      </ModalBlock>
    </ModalWindow>
  );
};

Modal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};
