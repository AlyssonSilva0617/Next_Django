// components/CloseButton.tsx
'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import Link from "next/link";
import { RootState } from '../redux/store';
import Axios from 'axios';

const CloseButton = () => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { note } = useSelector((state: RootState) => state.notes);  // Access the note from the Redux store
  // Handle saving the note

  const handleSaveNotes = () => {
    if (!note.category || !note.title || !note.content) {
      return;
    }
    if (note.id == 0 || !note.id) {
      // Create new note if id is 0
      Axios.post(`${API_BASE_URL}/items/create/`, {
        category: note.category,
        title: note.title,
        content: note.content,
        updated_at: new Date().toISOString(), // Default to the current date
        color: note.color,
      });
    } else {
      // Update existing note
      Axios.put(
        `${API_BASE_URL}/items/update/${note.id}/`,
        note
      );
    }
  };

  return (
    <Link href="/pages/home">
      <button
        className="absolute top-4 right-4 text-3xl font-bold text-gray-600 hover:text-gray-800"
        onClick={() => {
          handleSaveNotes();
        }}
      >
        &times;
      </button>
    </Link>
  );
};

export default CloseButton;
