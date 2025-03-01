// components/NewNoteButton.tsx
import React from 'react';
import Link from "next/link";

const NewNoteButton = () => {
  return (
    <div>

      <Link href="/pages/new-note">
        <button
          className="absolute top-4 right-4 border-2 border-yellow-500 text-yellow-500 p-3 rounded-full hover:bg-yellow-500 hover:text-white transition"
        >
          + New Note
        </button>
      </Link>
    </div>
  );
};

export default NewNoteButton;
