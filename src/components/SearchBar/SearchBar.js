import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../Button/Button';

function SearchBar({
    handleSubmit,
    placeholder,
    onChange,
    value
}) {
  const loading = useSelector((state) => state.movie.loading);
  const error = useSelector((state) => state.movie.error);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </Button>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default SearchBar;
