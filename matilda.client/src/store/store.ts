import { configureStore } from '@reduxjs/toolkit';
import tabsReducer from '../features/tabs/tabs-slice.ts'


// Import your slice reducers
// import someReducer from './features/someSlice';

export const store = configureStore({
    reducer: {
        tabs: tabsReducer
        // someReducer
    },
    // middleware and devTools are automatically included
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
