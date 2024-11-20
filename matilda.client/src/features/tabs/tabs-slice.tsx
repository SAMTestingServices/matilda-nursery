import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as React from "react";
import AboutUs from "../about-us/about-us.tsx";
import Contact from "../contact/contact.tsx"
import Staff from "../staff/staff.tsx";
import Gallery from "../gallery/gallery.tsx";
import ADayInTheLife from "../a-day-in-the-life/a-day-in-the-life.tsx";
import Home from "../home/home";

interface ITab {
    id: number;
    title: string;
    content?: React.ReactNode;
    backgroundColour: string;
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
        { id: 0, title: 'Home', content:<Home/> , backgroundColour: 'red'},
        { id: 1, title: 'About Us', content:<AboutUs/> , backgroundColour: 'yellow'},
        { id: 2, title: 'Documents' , backgroundColour: 'turquouise'},
        { id: 3, title: 'A day in the life', content: <ADayInTheLife/> , backgroundColour: 'brown'},
        { id: 4, title: 'Testimonials' , backgroundColour: 'pink'},
        { id: 5, title: 'Staff',content:<Staff/> , backgroundColour: 'red'},
        { id: 6, title: 'Gallery', content: <Gallery/> , backgroundColour: 'red'},
        { id: 7, title: 'Contact Us', content:<Contact/> , backgroundColour: 'red'}
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
