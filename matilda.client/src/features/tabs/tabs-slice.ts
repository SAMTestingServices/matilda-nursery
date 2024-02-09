import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import React from "react";

interface ITab {
    id: number;
    title: string;
    content?: React.ReactNode;
}

type Orientation = 'vertical' | 'horizontal';

// Define the initial state with tabData typed as ITab[]
interface TabsState {
    tabData: ITab[];
    pageOrientation: Orientation;
    currentTabId: number;
}

const initialState: TabsState = {
    tabData: [
        { id: 0, title: 'Home'},
        { id: 1, title: 'About Us' },
        { id: 2, title: 'Documents' },
        { id: 3, title: 'Testimonials' },
        { id: 4, title: 'Staff' },
        { id: 5, title: 'Gallery' },
        { id: 6, title: 'Contact Us' }
    ],
    pageOrientation: 'vertical',
    currentTabId: 0
};

export const tabsSlice = createSlice({
    name: 'tabs',
    initialState: initialState,
    reducers: {
        // define reducers and actions
        updatePageOrientation: (state, action: PayloadAction<Orientation>) =>{
            return {...state, pageOrientation: action.payload};
        },
        updateCurrentTab: (state, action: PayloadAction<number>) =>{
            return {...state, currentTabId: action.payload};
        }

    },
});

// Export actions
export const {
    updatePageOrientation,
    updateCurrentTab } = tabsSlice.actions;

// Export reducer
export default tabsSlice.reducer;