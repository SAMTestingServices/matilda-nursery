import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type TimelineIcon = 'BreakfastDiningIcon';

export interface ITimeLineItem {
    id: number;
    events: string[];
    time: string;
    icon?: TimelineIcon
}


// Define the initial state with tabData typed as ITab[]
interface TimelineState {
    timelimeItems: ITimeLineItem[];
}

//ToDo: I expect this data might come from a db eventually
const initialState: TimelineState = {
    timelimeItems: [
        {id: 0, events: ['Morning drop-off starts', 'Breakfast is served'],time: '08:00', icon: "BreakfastDiningIcon"},
        {id: 1, events: ['Breakfast time ends'],time: '09:00'},
        {id: 1, events: ['Outside play'],time: '10:00'},
        {id: 1, events: ['Outside play'],time: '10:00'},
        {id: 1, events: ['Outside play'],time: '10:00'},
        {id: 1, events: ['Outside play'],time: '10:00'},
        {id: 1, events: ['Outside play'],time: '10:00'},
        {id: 1, events: ['Outside play'],time: '10:00'},
        {id: 1, events: ['Outside play'],time: '10:00'},
        {id: 1, events: ['Outside play'],time: '10:00'}
        ]
};


export const timelineSlice = createSlice({
    name: 'timeline',
    initialState: initialState,
    reducers: {
        addTimelineItem: (state, action: PayloadAction<ITimeLineItem>) =>{
            return {...state};
        }

    },
});

// Export actions
export const {
     } = timelineSlice.actions;

// Export reducer
export default timelineSlice.reducer;
