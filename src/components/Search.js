import { React, useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Search = () => {
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([])
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  useEffect(() => {
    fetch("https://images-api-eosin.vercel.app/images")
      .then((res) => {
        if (!res.status) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((resp) => {
        setSuggestions(resp?.data);
      })
      .catch((err) => {
        console.error("API request failed:", err);
      });
  }, []);


  const handleChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    if (inputValue === '') {
      setFilteredSuggestions([]);
    } else {
      const filtered = suggestions.filter(suggestion =>
        suggestion.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
  };

  const navigatepage = () => {
    // navigate('/results', { state: { filteredSuggestions } });
     navigate('/results');

  }
  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative mt-2 rounded-md shadow-sm ">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">
            <IoSearch size={15} color="white" />
          </span>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type here..."
          className="text-white block w-full rounded-md border-0 py-1.5 pl-8 pr-20 text-gray-900 bg-[#125086]  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {filteredSuggestions.length > 0 && (
          <ul className="suggestions-list">
            {filteredSuggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion.title)} className="suggestion-item">
                {suggestion.title}
              </li>
            ))}
          </ul>
        )}
        <div className="absolute inset-y-0 right-2 flex items-center">
          <MdOutlineMenuOpen size={18} color="white" onClick={navigatepage} />
        </div>
      </div>
    </div>
  );
};

export default Search;






