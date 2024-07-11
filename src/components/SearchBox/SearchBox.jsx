import css from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div>
      <p className={css.searchDescr}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        className={css.searchInput}
      />
    </div>
  );
};

export default SearchBox;
