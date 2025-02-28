// pages/new-note/page.tsx
'use client';
import React, { useState } from 'react';
import SelectCategory from '../../components/SelectCategory';
import CloseButton from '../../components/CloseButton';
import NoteInputForm from '../../components/NoteInputForm';
import UpdatedTime from '../../components/UpdatedTime';

const NewNotePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories] = useState(['Personal', 'Work', 'Study']);
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
        <SelectCategory
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Note Input Form */}
        <NoteInputForm onSave={handleSaveNote} />

        {/* Show Last Edited Time */}
        {note && <UpdatedTime lastEdited={note.lastEdited} />}
      </div>
    </div>
  );
};

export default NewNotePage;
