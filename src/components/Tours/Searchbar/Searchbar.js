import PropTypes from 'prop-types';
import { SearchInput } from './Serchbar.styled';

export const Searchbar = ({ filter, changeFilter }) => {
  return (
    <SearchInput
      type="text"
      value={filter}
      onChange={changeFilter}
      placeholder="Search your trip"
    />
  );
};

Searchbar.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
