// components/NewNoteButton.tsx
import React from 'react';
import Link from "next/link";

const NewNoteButton = ({ }) => {
  return (
    <div>

      <Link href="/pages/new-note">
        <button
          className="absolute top-4 right-4 bg-yellow-500 text-white p-3 rounded-full shadow-lg"
        >
          + New Note
        </button>
      </Link>
    </div>
  );
};

export default NewNoteButton;
