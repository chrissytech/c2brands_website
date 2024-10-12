import React from "react";

function SearchBar() {
  return (
    <div className="flex w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl items-center gap-3 rounded-lg px-4 py-3 bg-white text-sm sm:text-base">
      <img src="/icons/search.svg" alt="search-icon" className="w-5 h-5" />
      <input
        type="text"
        placeholder="Search for a name"
        className="w-full outline-none text-gray-600 placeholder-gray-400"
      />
    </div>
  );
}

export default SearchBar;
