// components/Content.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import StickyNote from './StickyNotes';
import DefaultMessage from './DefaultMessage';
import NewNoteButton from './NewNoteButton';

const Content = () => {
  const { notes } = useSelector(
    (state: RootState) => state.mgnote
  );
  return (
    <div className="flex-1 bg-gray-100 p-4 relative  bg-yellow-50">
      <NewNoteButton />
      {/* Display sticky note or default message */}
      {notes.length>0 ? (
        <StickyNote/>
      ) : (
        <DefaultMessage />
      )}
    </div>
  );
};

export default Content;
