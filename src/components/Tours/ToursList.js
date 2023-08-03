import PropTypes from 'prop-types';
import { ToursListItem } from './ToursListItem';
import { TourList, TourListBlock } from './ToursList.styled';

export const ToursList = ({ tours, toggleModal, getForecast }) => {
  return (
    <TourListBlock>
      <TourList className="ToursList">
        {tours.map(elem => (
          <ToursListItem
            tourInfo={elem}
            key={elem.id}
            getForecast={getForecast}
          />
        ))}
      </TourList>
      <button type="button" onClick={toggleModal}>
        Add trip
      </button>
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
