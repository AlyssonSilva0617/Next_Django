"use client";

import React from "react";

const Sidebar = ({ notes, onSelect }: { notes: { id: number; title: string; color: string }[]; onSelect: (title: string) => void }) => {
  return (
    <div className="w-64 bg-gray-100 p-4 h-screen  bg-yellow-50">
      <h2 className="text-lg font-semibold mb-4">All Categories</h2>
      <ul>
        {notes.map((note) => (
          <SidebarItem key={note.id} title={note.title} color={note.color} onClick={() => onSelect(note.title)} />
        ))}
      </ul>
    </div>
  );
};

const SidebarItem = ({ title, color, onClick }: { title: string; color: string; onClick: () => void }) => {
  return (
    <li
      onClick={onClick}
      className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition"
    >
      {/* Circle Color Element */}
      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></div>
      {/* Title Element */}
      <span className="text-sm font-medium">{title}</span>
    </li>
  );
};

export default Sidebar;
