import React,{useState} from 'react';
import { popularProducts } from '../data/data';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      if (searchInput.length > 0) {
          countries.filter((country) => {
          return country.name.match(searchInput);
      });
      }
  return (
    <div>
        <input
   type="text"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />
    </div>
  )
}

export default SearchBar