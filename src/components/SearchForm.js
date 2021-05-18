import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.blue}
          value={props.redb}
          name="search"
          type="text"
          placeholder="Enter First Name"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
