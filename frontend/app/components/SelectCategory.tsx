// components/SelectCategory.tsx
'use client'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setColor } from '../redux/setenvSlice';
import { setCategory } from '../redux/setenvSlice';

const SelectCategory = ( ) => {

  const { note } = useSelector(
    (state: RootState) => state.notes
  );

  const { categories } = useSelector(
    (state: RootState) => state.categories
  );

  const [isOpen, setIsOpen] = useState(false);             // State for dropdown visibility
  const dispatch = useDispatch();

  const handleSelect = (title: string, color: string) => {
    dispatch(setCategory(title));
    dispatch(setColor(color));
    setIsOpen(false);  // Close dropdown after selection
  };
  
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/5 ml-30">
        <div className="relative inline-block w-64">
          {/* Dropdown Button */}
          <button
            className="flex items-center justify-between w-full px-4 py-2 border border-black rounded-md"
            onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility
          >
            { <span className={`w-4 h-4 rounded-full bg-${note.color}-100`} style={{backgroundColor: note.color}}></span>}
            {note.category || 'Select Option'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
              <ul className="py-1">
                {categories.map((category) => (
                  <li
                    onClick={() => handleSelect(category.title, category.color)}
                    key={category.id}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200 flex items-center gap-2"
                  >
                    <span className={`w-4 h-4 rounded-full bg-${category.color}-100`} style={{backgroundColor: category.color}}></span> {category.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectCategory;
