// pages/home.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchCategories } from '../../redux/categoriesSlice';
import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';

const HomePage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { categories, loading, error } = useSelector(
      (state: RootState) => state.categories
    );

    useEffect(() => {
      dispatch(fetchCategories());
    }, [dispatch]);
    const [notes, setNotes] = useState([
        { id: 1, title: "Meeting Notes", color: "#FF5733" },
        { id: 2, title: "Ideas", color: "#33FF57" },
        { id: 3, title: "Shopping List", color: "#3357FF" },
    ]);
    const [selectedNote, setSelectedNote] = useState<string | null>(null);

    const handleNewNote = () => {
        // setNotes([...notes, `New Note ${notes.length + 1}`]); // Add new note to the list
    };

    const handleNoteClick = (title: string) => {
        setSelectedNote(title); // Set the selected note
    };

    return (
        <div className="flex min-h-screen bg-yellow-2000">
            {/* Left Section: Notes List */}
            <Sidebar notes={notes} onSelect={handleNoteClick} />
            {/* Right Section: Sticky Notes */}
            <Content selectedNote={selectedNote} />
        </div>
    );
};

export default HomePage;
