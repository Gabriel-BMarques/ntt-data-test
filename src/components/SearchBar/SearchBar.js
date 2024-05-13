import React from 'react';
import { useSelector } from 'react-redux';

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
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default SearchBar;
