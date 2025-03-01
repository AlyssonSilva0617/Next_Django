// components/CloseButton.tsx
'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from "next/link";
import { RootState } from '../redux/store';
import { setNote } from '../redux/setenvSlice';
import Axios from 'axios';

const CloseButton = () => {
  const dispatch = useDispatch();
  const { note } = useSelector((state: RootState) => state.notes);  // Access the note from the Redux store

  // Handle saving the note
  const handleSaveNotes = () => {
    
    if (note.id == 0 || !note.id) {
      // Create new note if id is 0
      Axios.post('http://localhost:8000/api/items/create/', {
        category: note.category,
        title: note.title,
        content: note.content,
        updated_at: new Date().toISOString(), // Default to the current date
        color: note.color,
      }).then(res => {
        dispatch(setNote({
          id: 0,
          category: '',
          title: '',
          content: '',
          updated_at: '', // Default to the current date
          color: ''
        }))
      });
    } else {
      // Update existing note
      Axios.put(
        `http://localhost:8000/api/items/update/${note.id}/`,
        note
      ).then(res => {
        dispatch(setNote({
          id: 0,
          category: '',
          title: '',
          content: '',
          updated_at: '', // Default to the current date
          color: ''
        }))
      });
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
