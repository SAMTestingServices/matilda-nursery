import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IPicture {
    id: number;
    title: string;
    picture: string;
}


// Define the initial state with tabData typed as ITab[]
interface GalleryState {
    pictures: IPicture[];
}

//ToDo: I expect this data might come from a db eventually
const initialState: GalleryState = {
    pictures: [
        { id: 0, title: 'Steve',picture:'https://www.matildanursery.com/images/matildahighres-12_small.jpg?crc=4085537413'},
        { id: 1, title: '',picture:'https://www.matildanursery.com/images/img_0845_small360x480.jpg?crc=134012725'},
        { id: 2, title: '',picture:'https://www.matildanursery.com/images/img_0849_small360x480.jpg?crc=338012082'},
        { id: 3, title: '',picture:'https://www.matildanursery.com/images/matildahighres-2_small.jpg?crc=206440773'},
        { id: 4, title: '',picture:'https://www.matildanursery.com/images/matildahighres-10_small-crop-u46940.jpg?crc=114671658'},
        { id: 5, title: '',picture:'https://www.matildanursery.com/images/matildahighres-11_small.jpg?crc=431938760'},
        { id: 6, title: '',picture:'https://www.matildanursery.com/images/matildahighres-12_small.jpg?crc=4085537413'},
        { id: 7, title: '',picture:'https://www.matildanursery.com/images/matildahighres-22_small.jpg?crc=362336436'},
        { id: 8, title: '',picture:'https://www.matildanursery.com/images/matildahighres-24_small.jpg?crc=61997048'},
        { id: 9, title: '',picture:'https://www.matildanursery.com/images/matildahighres-85_small320x480.jpg?crc=4236867223'},
        { id: 10, title: '',picture:'https://www.matildanursery.com/images/matildahighres-86_small320x480.jpg?crc=510052830'}
        ]
};


export const gallerySlice = createSlice({
    name: 'gallery',
    initialState: initialState,
    reducers: {
        // define reducers and actions
        updateStaff: (state, action: PayloadAction<IPicture>) =>{
            return {...state};
        }

    },
});

// Export actions
export const {
    updateStaff
     } = gallerySlice.actions;

// Export reducer
export default gallerySlice.reducer;
