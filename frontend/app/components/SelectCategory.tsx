// components/SelectCategory.tsx
import React from 'react';
const SelectCategory = ({ categories, selectedCategory, setSelectedCategory }: any) => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/5 ml-30">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 rounded-md w-full"
        >
          {categories.map((category: string, index: number) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectCategory;
