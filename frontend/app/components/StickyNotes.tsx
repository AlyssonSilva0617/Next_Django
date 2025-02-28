// components/StickyNote.tsx
import React from 'react';

interface StickyNoteProps {
  note: string;
}

const StickyNote: React.FC<StickyNoteProps> = ({ note }) => {
  return (
    <div className="bg-yellow-300 p-4 rounded-lg shadow-lg max-w-md mx-auto">
      <p>{note}</p>
    </div>
  );
};

export default StickyNote;
