import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { FunnelIcon } from '@heroicons/react/24/outline';

function SearchBox({selectedFilters,setSelectedFilters,setTitle,handleSearch}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filters = ['MCQ', 'CONTENT_ONLY','CONVERSATION','ANAGRAM','READ_ALONG'];

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const handleFilterSelection = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  return (
    <div className='p-5 sticky top-0 bg-slate-200 z-10 shadow-lg mb-5 border-solid border-slate-500 border-b-2'>
      {/* Search Box */}
      <div className="flex items-center border-2 border-gray-300 rounded-full h-full px-3 relative bg-white">
        {/* Search Icon */}
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        {/* Input Field */}
        <input
          type="text"
          placeholder="Search"
          className="flex-grow border-none focus:outline-none pl-3 text-gray-900 placeholder-gray-400"
          onChange={(e)=>{setTitle(e.target.value)}}
        />
        {/* Filter Button */}
        <button
          onClick={toggleFilter}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none"
          aria-label="Filter"
        >
          <FunnelIcon className="h-5 w-5 text-gray-500" />
        </button>
        {/* Dropdown Menu */}
        {isFilterOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            {filters.map((filter) => (
              <label
                key={filter}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedFilters.includes(filter)}
                  onChange={() => handleFilterSelection(filter)}
                />
                {filter}
              </label>
            ))}
          </div>
        )}
        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full text-sm focus:outline-none"
        >
          Search
        </button>
      </div>
      {/* Selected Filters Display */}
      {selectedFilters.length > 0 && (
        <div className="mt-2 text-gray-700">
          <strong>Selected Filters:</strong> {selectedFilters.join(', ')}
        </div>
      )}
    </div>
  );
}

export default SearchBox;
