import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as React from "react";
import Home from "../../pages/home.tsx";
import AboutUs from "../about-us/about-us.tsx";
import Contact from "../contact/contact.tsx"
import Staff from "../staff/staff.tsx";
import Gallery from "../gallery/gallery.tsx";
import ADayInTheLife from "../a-day-in-the-life/a-day-in-the-life.tsx";

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
        { id: 1, title: 'About Us', content:<AboutUs/> },
        { id: 2, title: 'Documents' },
        { id: 3, title: 'A day in the life', content: <ADayInTheLife/> },
        { id: 4, title: 'Testimonials' },
        { id: 5, title: 'Staff',content:<Staff/> },
        { id: 6, title: 'Gallery', content: <Gallery/> },
        { id: 7, title: 'Contact Us', content:<Contact/> }
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