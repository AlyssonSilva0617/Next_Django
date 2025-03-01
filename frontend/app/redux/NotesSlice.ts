// redux/notesSlice.ts.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the types for notes
interface Note {
    id: number;
    category: string;
    title: string;
    content: string;
    color: string;
    updated_at: string;
}

interface NoteState {
    notes: Note[];
    loading: boolean;
    error: string | null;
}

// Initial state
const initialState: NoteState = {
    notes: [],
    loading: false,
    error: null,
};

// Async thunk for fetching notes from Django API
export const fetchNotes = createAsyncThunk(
    'notes/fetchNotes',
    async () => {
        const response = await fetch('http://localhost:8000/api/items/'); // Change to your Django API endpoint
        if (!response.ok) {
            throw new Error('Failed to fetch notes');
        }
        return (await response.json()) as Note[];
    }
);
// Async thunk for fetching note from Django API
export const fetchNote = createAsyncThunk(
    'notes/fetchNote',
    async (category: string, { rejectWithValue }) => {
        const response = await fetch(`http://localhost:8000/api/items/${category}/`); // Change to your Django API endpoint
        if (!response.ok) {
            throw new Error('Failed to fetch notes');
        }
        return (await response.json()) as Note[];
    }
);

// Create the slice
const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotes.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.loading = false;
                state.notes = action.payload;
            })
            .addCase(fetchNotes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            })
            .addCase(fetchNote.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchNote.fulfilled, (state, action) => {
                state.loading = false;
                state.notes = action.payload;
            })
            .addCase(fetchNote.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            })
            ;
    },
});

export default notesSlice.reducer;
