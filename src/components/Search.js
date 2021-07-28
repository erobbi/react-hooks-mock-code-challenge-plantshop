import React, {useEffect, useState} from "react";

function Search() {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handleSearch()}
      />
    </div>
  );
}

export default Search;
