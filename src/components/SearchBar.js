import React, { useState } from 'react';

const SearchBar = ({ onSearch, defaultSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState(defaultSearchTerm);

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    onSearch(searchTerm);
    // make sure to call
    // callback from the parent component
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={searchTerm} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
