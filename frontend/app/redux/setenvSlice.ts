// redux/setEnvSlice.ts.
import { createSlice } from '@reduxjs/toolkit';
// Define the types for categories
interface Note {
    id: number;
    category: string,
    title: string,
    content: string,
    updated_at: string,
    color: string;
}

interface CategoriesState {
    note: Note;
    setedColor: string | "";
    isEditing: boolean | false
}

// Initial state
const initialState: CategoriesState = {
    note: {
        id: 0,
        category: '',
        title: '',
        content: '',
        updated_at: new Date().toISOString(), // Default to the current date
        color: '',
    },
    isEditing: false,
    setedColor: ""
};
// Create the slice
const setEnvSlice = createSlice({
    name: 'setenvSlice',
    initialState,
    reducers: {
        // Action to set the note
        setNote: (state, action) => {
            state.note = action.payload;
        },
        setId: (state, action) => {
            state.note.id = action.payload;
        },
        setCategory: (state, action) => {
            state.note.category = action.payload;
        },
        setTitle: (state, action) => {
            state.note.title = action.payload;
        },
        setContent: (state, action) => {
            state.note.content = action.payload;
        },
        setTime: (state, action) => {
            state.note.updated_at = action.payload;
        },
        setColor: (state, action) => {
            state.note.color = action.payload;
            state.setedColor = action.payload;
        },
        isEditing: (state, action) => {
            state.isEditing = action.payload;
        },
    },
});

export const { setId, setNote, setColor, setCategory, setTitle, setContent, setTime } = setEnvSlice.actions;

export default setEnvSlice.reducer;
