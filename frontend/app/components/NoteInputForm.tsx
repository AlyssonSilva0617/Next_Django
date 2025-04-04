// components/NoteInputForm.tsx
'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setTitle as setNoteTitle, setContent as setNoteContent, setTime } from '../redux/setenvSlice';

const NoteInputForm = ({ onSave }: any) => {
  const { note } = useSelector(
    (state: RootState) => state.notes
  );
  const [title, setTitle] = useState(note.title || "");
  const [content, setContent] = useState(note.content);
  const [lastEdited, setLastEdited] = useState(note.updated_at);
  const dispatch = useDispatch();

  const updateTimestamp = () => {
    const now = new Date();
    setLastEdited(new Date().toISOString());
  };

  const handleInputChange = () => {
    updateTimestamp();
  };

  useEffect(() => {
    dispatch(setNoteTitle(title));
  }, [title]);

  useEffect(() => {
    dispatch(setNoteContent(content));
  }, [content]);

  useEffect(() => {
    dispatch(setTime(new Date().toISOString()));
  }, [lastEdited]);

  const setUpdated_date = useMemo(() => {
    let date = new Date(lastEdited);
    const formattedDate = date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      timeZone: "UTC" // Adjust based on your timezone preference
    });
    return formattedDate
  }, [lastEdited])

  return (
    <div
      className={`flex flex-col rounded-3xl w-full mt-4 p-4 bg-opacity-25`}
      style={{ height: "calc(100vh - 130px)", backgroundColor: note.color }}
    >
      {/* Last Edited Time */}
      {lastEdited && (
        <div className="absolute right-4 text-sm text-gray-600 ml-8 mr-20 mt-[-12]">
          {setUpdated_date}
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
        className={`p-4 mb-4 border-none rounded-md w-full text-lg bg-${note.color}-100 ml-0 focus:outline-none focus:ring-0`}
        style={{ backgroundColor: note.color }}
      />

      {/* Note Content */}
      <textarea
        placeholder="Pour your heart out...."
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          handleInputChange();
        }}
        className={`p-4 mb-4 h-full border-none rounded-md w-full resize-none bg-${note.color}-100 ml-0 focus:outline-none focus:ring-0 focus:shadow-md focus:bg-${note.color}-200`}
        style={{ backgroundColor: note.color }}
      />
    </div>
  );
};

export default NoteInputForm;
