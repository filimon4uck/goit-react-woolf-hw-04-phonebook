import style from './Filter.module.css';
const Filter = ({ filterText, onFilterChange }) => {
  return (
    <div>
      <input
        className={style.filter_field}
        type="text"
        name="filter"
        value={filterText}
        onChange={onFilterChange}
        placeholder="Search..."
      />
    </div>
  );
};
export default Filter;
