import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import '@ui5/webcomponents/dist/Input';
import './SearchBar.scss';

function SearchBar({
    handleSubmit,
    handleReset,
    placeholder,
    onChange,
    value
}) {
  const loading = useSelector((state) => state.movie.loading);

  return (
    <div className='search-container'>
      <ui5-input
        value={value}
        onInput={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </Button>
      <Button onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
};

export default SearchBar;
