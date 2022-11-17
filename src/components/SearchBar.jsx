import "./Card.css";

function SearchBar(props) {
  return (
    <div className="div__search">
      <input type="search" placeholder="Who would you like to add?" />
      <button onClick={props.onSearch}>Add</button>
    </div>
  );
}

export default SearchBar;
