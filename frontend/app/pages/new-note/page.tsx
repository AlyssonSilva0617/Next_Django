// pages/new-note/page.tsx
'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import SelectCategory from '../../components/SelectCategory';
import CloseButton from '../../components/CloseButton';
import NoteInputForm from '../../components/NoteInputForm';
import UpdatedTime from '../../components/UpdatedTime';

const NewNotePage = () => {
  const { categories } = useSelector(
    (state: RootState) => state.categories
  );
  const [note, setNote] = useState<any>(null);

  const handleSaveNote = (newNote: any) => {
    setNote(newNote); // Save the note data
  };

  return (
    <div className="relative p-8 min-h-screen bg-yellow-50">
      {/* Close Button */}
      <CloseButton />

      {/* New Note Form */}
      <div className="flex flex-col">
        
        {/* Category Selection */}
        <SelectCategory />

        {/* Note Input Form */}
        <NoteInputForm />

        {/* Show Last Edited Time */}
        {note && <UpdatedTime lastEdited={note.lastEdited} />}
      </div>
    </div>
  );
};

export default NewNotePage;
