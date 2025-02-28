// components/NoteInputForm.tsx
'use client';
import React, { useState } from 'react';

const NoteInputForm = ({ onSave }: any) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [lastEdited, setLastEdited] = useState<string | null>(null);

  const handleSave = () => {
    const currentDate = new Date();
    const note = {
      title,
      content,
      lastEdited: currentDate,
    };
    onSave(note); // Call the function passed from the parent to save the note
  };

  const updateTimestamp = () => {
    const now = new Date();
    setLastEdited(
      `Last Edited: ${now.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })}`
    );
  };

  const handleInputChange = () => {
    updateTimestamp();
  };

  return (
    <div
      className="flex flex-col bg-yellow-100 rounded-3xl w-full mt-4 p-4"
      style={{ height: "calc(100vh - 120px)" }}
    >
      {/* Last Edited Time */}
      {lastEdited && (
        <div className="absolute right-4 text-sm text-gray-600 ml-8 mr-20 mt-[-12]">
          {lastEdited}
        </div>
      )}

      {/* Note Title */}
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          handleInputChange();
        }}
        className="p-4 mb-4 border-b-2 border-gray-300 rounded-md w-full text-lg bg-yellow-100"
      />

      {/* Note Content */}
      <textarea
        placeholder="Pour your heart out...."
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          handleInputChange();
        }}
        className="p-4 mb-4 h-full border-2 border-gray-300 rounded-md w-full resize-none bg-yellow-100"
      />
    </div>
  );
};

export default NoteInputForm;
