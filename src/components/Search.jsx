import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

const Search = () => {
  //state
  const [search, setSearch] = useState("");

  return (
    <div className="search_container">
      <input
        type="search"
        placeholder="Search for products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <RiSearch2Line />
    </div>
  );
};

export default Search;
