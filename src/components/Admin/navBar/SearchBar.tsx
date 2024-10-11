import React from "react";

function SearchBar() {
  return (
    <div className="flex w-full- max- w-[600px] items-center  gap-[12px] rounded-[8px] px-4 py-3  bg-white text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px]">
      <img src="/icons/search.svg" alt="chrissy" className=" w-5 h-5 " />
      <input
        type="text"
        placeholder="Search for a name"
        className="w-full outline-none text-gray-600"
      />
    </div>
  );
}

export default SearchBar;
