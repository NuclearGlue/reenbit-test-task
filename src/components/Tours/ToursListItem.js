import PropTypes from 'prop-types';
import { destinations } from '../../destinations';

export const ToursListItem = ({ tourInfo }) => {
  if (tourInfo !== []) {
    const cityImg = destinations.find(
      element => element.name === tourInfo.city,
    ).imageURL;
    return (
      <li className="ToursListItem">
        <img
          src={cityImg}
          alt={tourInfo.city}
          className="ToursListItem-image"
        />
        <p>{tourInfo.city}</p>
        <p>
          {tourInfo.startDate}-{tourInfo.endDate}
        </p>
      </li>
    );
  }
};

ToursListItem.propTypes = {
  tourInfo: PropTypes.shape({
    city: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }),
};
