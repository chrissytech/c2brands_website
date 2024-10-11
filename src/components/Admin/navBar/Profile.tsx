"use client"


import { ParagraphLink1, ParagraphLink2 } from "@/components/Text";
import { useState } from "react";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...");
  };

  return (
    <div className="relative inline-block text-left">
      {/* Profile Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 p-2  rounded-[8px] bg-white transition"
      >
        <img
          src="/images/profilePics.svg" // Replace with the actual path to profile image
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
        <p className="font-medium">Chrissy C.M</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-[8px]">
          <div className="py-1">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
