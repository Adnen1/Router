import "./search.css"
import React from "react";
const SearchMovie = ({ setNameSearch }) => {
    return (
      <div className="inp">
        <div className="search-container">
          <input
          
            type="text"
            placeholder="Type movie name to search"
            onChange={(e) => setNameSearch(e.target.value)}
          />
          <div className="rating-search">
           
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchMovie;
  