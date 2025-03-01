// redux/categoriesSlice.ts.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the types for categories
interface Category {
    id: number;
    title: string,
    total_items: number,
    color: string;
}

interface CategoriesState {
    categories: Category[];
    loading: boolean;
    error: string | null;
}

// Initial state
const initialState: CategoriesState = {
    categories: [],
    loading: false,
    error: null,
};

// Async thunk for fetching categories from Django API
export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const response = await fetch('http://localhost:8000/api/categories/'); // Change to your Django API endpoint
        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        return (await response.json()) as Category[];
    }
);

// Create the slice
const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default categoriesSlice.reducer;
