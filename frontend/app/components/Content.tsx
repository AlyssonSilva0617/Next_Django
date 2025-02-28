// components/Content.tsx
import React from 'react';
import StickyNote from './StickyNotes';
import DefaultMessage from './DefaultMessage';
import NewNoteButton from './NewNoteButton';

interface ContentProps {
  selectedNote: string | null;
}

const Content: React.FC<ContentProps> = ({ selectedNote }) => {
  return (
    <div className="flex-1 bg-gray-100 p-4 relative  bg-yellow-50">
      <NewNoteButton />
      {/* Display sticky note or default message */}
      {selectedNote ? (
        <StickyNote note={selectedNote} />
      ) : (
        <DefaultMessage />
      )}
    </div>
  );
};

export default Content;
