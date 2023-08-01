import PropTypes from 'prop-types';

export const Searchbar = ({ filter, changeFilter }) => {
  return (
    <label className="filter">
      Search your trip
      <input
        className="filter__field"
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};

Searchbar.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
