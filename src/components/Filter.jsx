import PropTypes from "prop-types";
import css from "./Filter.module.css";

export const Filter = ({ search, setSearch }) => {
  
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  
  return (
    <div className={css.filter}>
      <label htmlFor="search">Buscar por nombre de contacto</label>
      <input
        className={css.filter__input}
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  );
};


Filter.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
}