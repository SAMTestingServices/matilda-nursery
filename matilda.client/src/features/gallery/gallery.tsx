import React from "react";
import {Grid, ImageList, ImageListItem} from "@mui/material";
import {useAppSelector} from "../../hooks/store-hooks.ts";

const Gallery = ()  => {

    const pictureData = useAppSelector((state) => state.gallery.pictures); // Assuming 'tabs' is the key used in the store

    const pics = (
        <>
                <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
                    {pictureData.map((item) => (
                        <ImageListItem key={item.id}>
                            <img
                                srcSet={`${item.picture}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.picture}?w=161&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                    </>
                );

    return pics;
}

export default Gallery;