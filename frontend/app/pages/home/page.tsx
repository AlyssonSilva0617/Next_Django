// pages/home.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchCategories } from '../../redux/categoriesSlice';
import { fetchNotes, fetchNote } from '../../redux/NotesSlice';
import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';

const HomePage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { categories } = useSelector(
      (state: RootState) => state.categories
    );

    const [selectedNote, setSelectedNote] = useState('');
    useEffect(() => {
      dispatch(fetchCategories());
      dispatch(fetchNotes());
    }, [dispatch]);

    useEffect(() => {
      if(selectedNote)
      dispatch(fetchNote(selectedNote));
    }, [selectedNote]);

    const handleNoteClick = (title: string) => {
        setSelectedNote(title); // Set the selected note
    };

    return (
        <div className="flex min-h-screen bg-yellow-2000">
            {/* Left Section: Notes List */}
            <Sidebar notes={categories} onSelect={handleNoteClick} />
            {/* Right Section: Sticky Notes */}
            <Content />
        </div>
    );
};

export default HomePage;
