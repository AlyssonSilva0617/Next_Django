// components/NewNoteButton.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setNote } from '../redux/setenvSlice';
import Link from "next/link";

const NewNoteButton = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(
    (state: RootState) => state.categories
  );
  const handleAddNotes = () => {
    dispatch(setNote({
      id: 0,
      category: categories[0].title,
      color: categories[0].color
    }))
  }
  return (
    <div>
      <Link href="/pages/new-note">
        <button
          className="absolute top-4 right-4 border-2 border-yellow-500 text-yellow-500 p-3 rounded-full hover:bg-yellow-500 hover:text-white transition"
          onClick={() => {
            handleAddNotes();
          }}
        >
          + New Note
        </button>
      </Link>
    </div>
  );
};

export default NewNoteButton;
