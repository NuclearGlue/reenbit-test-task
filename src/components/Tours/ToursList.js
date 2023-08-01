import PropTypes from 'prop-types';
import { ToursListItem } from './ToursListItem';

export const ToursList = ({ tours, toggleModal }) => {
  return (
    <div>
      <ul className="ToursList">
        {tours.map(elem => (
          <ToursListItem tourInfo={elem} key={elem.id} />
        ))}
      </ul>
      <button type="button" onClick={toggleModal}>
        Add trip
      </button>
    </div>
  );
};

ToursList.propTypes = {
  imageArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
