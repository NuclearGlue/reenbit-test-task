import PropTypes from 'prop-types';
import { destinations } from '../../destinations';
import {
  TourItem,
  TourImage,
  TourInfoBlock,
  TourInfoCity,
  TourInfoDate,
} from './ToursList.styled';

export const ToursListItem = ({ tourInfo, getForecast }) => {
  if (tourInfo !== []) {
    const cityImg = destinations.find(
      element => element.name === tourInfo.city,
    ).imageURL;
    return (
      <TourItem
        onClick={() =>
          getForecast(tourInfo.city, tourInfo.startDate, tourInfo.endDate)
        }
      >
        <TourImage src={cityImg} alt={tourInfo.city} />
        <TourInfoBlock>
          <TourInfoCity>{tourInfo.city}</TourInfoCity>
          <TourInfoDate>
            {tourInfo.startDate}-{tourInfo.endDate}
          </TourInfoDate>
        </TourInfoBlock>
      </TourItem>
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
