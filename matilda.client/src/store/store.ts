import { configureStore } from '@reduxjs/toolkit';
import tabsReducer from '../features/tabs/tabs-slice'
import staffReducer from '../features/staff/staff-slice'
import galleryReducer from '../features/gallery/gallery-slice'


// Import your slice reducers
// import someReducer from './features/someSlice';

export const store = configureStore({
    reducer: {
        tabs: tabsReducer,
        staff: staffReducer,
        gallery: galleryReducer,

        // someReducer
    },
    // middleware and devTools are automatically included
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
