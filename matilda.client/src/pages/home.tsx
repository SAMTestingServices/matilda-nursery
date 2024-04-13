import React, {useEffect, useState} from "react";
import {Box, Tab, Tabs, Typography} from "@mui/material";
import V2ContractDoc from "../features/about-us/about-us.tsx";


export interface ITab {
    title: string;
    content?: React.ReactNode;
}



function Home() {
    return (
        <>
            <div style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}></div>
        </>
    );
}

export default Home;
