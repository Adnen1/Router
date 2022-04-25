import React from "react"

const SearchMovie= ({setNameChange }) => {
    return (
      <span>
        <div className="search-container"/>
          <input
            type="text"
            placeholder="Type movie name to search"
            onChange={(e) => setNameChange(e.target.value)}
          />
          
          <div/>
          <div/>
          </span>
          )
          }
          export default SearchMovie
