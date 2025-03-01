"use client";

import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Sidebar = ({ onSelect }: { onSelect: (title: string) => void }) => {

  const { categories } = useSelector(
    (state: RootState) => state.categories
  );
  console.log(categories);

  return (
    <div className="w-64 bg-gray-100 p-4 h-screen  bg-yellow-50">
      <h2 className="text-lg font-semibold mb-4">All Categories</h2>
      <ul>
        {categories.map((category) => (
          <SidebarItem key={category.id} title={category.title} color={category.color} total_items={category.total_items} onClick={() => onSelect(category.title)} />
        ))}
      </ul>
    </div>
  );
};

const SidebarItem = ({ title, color, total_items, onClick }: { title: string; color: string; total_items: number; onClick: () => void }) => {

  return (
    <li
      onClick={onClick}
      className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition"
    >
      {/* Circle Color Element */}
      <div className={`w-4 h-4 rounded-full bg-opacity-50`} style={{ backgroundColor: color }}></div>

      {/* Title Element */}
      <span className="text-sm font-medium">{title}</span>

      {/* Total Items Element aligned to the right */}
      <span className="text-sm font-medium ml-auto">{total_items}</span>
    </li>
  );
};

export default Sidebar;
