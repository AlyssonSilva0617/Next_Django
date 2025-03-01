// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice'; // Import the categories slice
import setenvReducer from './setenvSlice'; // Import the categories slice
import mgnoteReducer from './NotesSlice'; // Import the categories slice

export const store = configureStore({
    reducer: {
        categories: categoriesReducer, // Add the categories reducer to the store
        notes: setenvReducer, // Add the categories reducer to the store
        mgnote: mgnoteReducer, // Add the categories reducer to the store
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
