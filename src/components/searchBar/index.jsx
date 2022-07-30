import { SEARCH_ICON_SVG } from '../../assets/images';

// import style for this component
import './searchBar.css';

const SearchBar = () => {
  return (
    <div className="position-relative">
      <img src={SEARCH_ICON_SVG} alt="search-icon" className="search-icon" />
      <input type="text" placeholder="Search" className="search-input" />
    </div>
  );
};

export default SearchBar;
