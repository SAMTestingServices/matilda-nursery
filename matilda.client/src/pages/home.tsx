import React, {useEffect, useState} from "react";
import {Box, Tab, Tabs, Typography} from "@mui/material";
import V2ContractDoc from "../features/about-us/about-us.tsx";


export interface ITab {
    title: string;
    content?: React.ReactNode;
}



function Home() {
    return (
        <V2ContractDoc></V2ContractDoc>
    );
}

export default Home;