// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice'; // Import the categories slice

export const store = configureStore({
    reducer: {
        categories: categoriesReducer, // Add the categories reducer to the store
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
