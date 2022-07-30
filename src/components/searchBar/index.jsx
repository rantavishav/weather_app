import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SEARCH_ICON_SVG } from '../../assets/images';
import useDebounce from '../../hooks/useDebounce';
import { RenderIf } from '../../utils';
import SearchOptions from './searchOptions';

// import style for this component
import './searchBar.css';
import { getSearchListAction, getWeatherDetailAction } from '../../store/sagaActions';

const SearchBar = () => {
  const [showSearchOptions, setShowSearchOptions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const openSearchOptions = () => setShowSearchOptions(true);
  const closeSearchOptions = () => setShowSearchOptions(false);

  const handleOptionSelect = (location) => {
    dispatch(getWeatherDetailAction({ location: location.name }));
    setSearchTerm(location.name);
    closeSearchOptions();
  };

  // close search options when user clicks outside of the search bar
  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && inputRef.current.contains(event.target)) {
        return openSearchOptions();
      }
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        closeSearchOptions();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputRef, wrapperRef, showSearchOptions]);

  // call api when debouncedSearchTerm changes
  useEffect(() => {
    dispatch(getSearchListAction({ searchTerm: debouncedSearchTerm }));
  }, [debouncedSearchTerm]);

  return (
    <div className="position-relative">
      <img src={SEARCH_ICON_SVG} alt="search-icon" className="search-icon" />
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        ref={inputRef}
        onFocus={openSearchOptions}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="test-autocomplete d-flex justify-content-center" ref={wrapperRef}>
        <RenderIf isTrue={showSearchOptions}>
          <SearchOptions handleOptionSelect={handleOptionSelect} />
        </RenderIf>
      </div>
    </div>
  );
};

export default SearchBar;
