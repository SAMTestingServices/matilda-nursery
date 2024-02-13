import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ITimeLineItem {
    id: number;
    events: string[];
    time: string;
    icon?: null|'BreakfastDiningIcon'
}


// Define the initial state with tabData typed as ITab[]
interface TimelineState {
    timelimeItems: ITimeLineItem[];
}

//ToDo: I expect this data might come from a db eventually
const initialState: TimelineState = {
    timelimeItems: [
        {id: 0, events: ['Morning drop-off starts', 'Breakfast is served'],time: '08:00'},
        {id: 1, events: ['Breakfast time ends'],time: '09:00'}
        ]
};


export const gallerySlice = createSlice({
    name: 'gallery',
    initialState: initialState,
    reducers: {
        // define reducers and actions
        updateStaff: (state, action: PayloadAction<IPicture>) =>{
            return {...state};
        },

    },
});

// Export actions
export const {
    updateStaff
     } = gallerySlice.actions;

// Export reducer
export default gallerySlice.reducer;