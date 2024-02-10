import React, {useEffect, useState} from "react";
import {Box, Tab, Tabs, Typography} from "@mui/material";
import V2ContractDoc from "../features/about-us/about-us.tsx";


export interface ITab {
    title: string;
    content?: React.ReactNode;
}



function Home() {


    const mock1: ITab[] = [
        { title: "Overview", url: "https://emotion.sh/docs/styled" },
        {
            title: "Recap",
            url: "https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik",
        },
        {
            title: "Recap V2",
            url: "https://sea-weu-krkn-front-web-app.azurewebsites.net/Workspace/9eddf75c-937f-4032-ba01-41cc5f0122e4?stepId=853e75ee-1a46-4e50-a54e-eb0984504768&actionId=35a0ae89-cfe0-415d-be3f-5a1746dc97b1",
            iFrameHandlesScrolling: true
        },
        { title: "Charter Party", url: "https://www.youtube.com/embed/aL27fX5kv9U" },
        {
            title: "Charter Party V2",
            url: "https://sea-weu-krkn-front-web-app.azurewebsites.net/Document/745faf9f-69e6-4ba1-bb3a-1e8f08d0fe48",
            iFrameHandlesScrolling: true
        },
        {
            title: "Addenda (x)",
            url: "https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik",
        },
        { title: "Attachments", url: "https://www.youtube.com/embed/aL27fX5kv9U" },
        { title: "History", url: "https://www.youtube.com/embed/aL27fX5kv9U" },
    ];








    function a11yProps(index: number) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    return (
        <V2ContractDoc></V2ContractDoc>
    );
}

export default Home;