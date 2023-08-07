import { useState } from 'react';

import PropTypes from 'prop-types';
import { ToursListItem } from './ToursListItem';
import {
  TourList,
  TourListBlock,
  AddTourButton,
  BsPlusLgIcon,
  AddTourButtonText,
  ArrowLeft,
  ArrowRight,
} from './ToursList.styled';

export const ToursList = ({ tours, toggleModal, getForecast }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex < tours.length - 2) {
      setStartIndex(prevIndex => prevIndex + 1);
    } else {
      setStartIndex(0);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(prevIndex => prevIndex - 1);
    } else {
      setStartIndex(tours.length - 2);
    }
  };

  return (
    <TourListBlock>
      <TourList>
        <ArrowLeft onClick={handlePrevious} />
        {tours.slice(startIndex, startIndex + 2).map(elem => (
          <ToursListItem
            tourInfo={elem}
            key={elem.id}
            getForecast={getForecast}
          />
        ))}
        <ArrowRight onClick={handleNext} />
      </TourList>

      <AddTourButton type="button" onClick={toggleModal}>
        <BsPlusLgIcon />
        <AddTourButtonText>Add trip</AddTourButtonText>
      </AddTourButton>
    </TourListBlock>
  );
};

ToursList.propTypes = {
  imageArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
