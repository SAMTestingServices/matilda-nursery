import React, {ReactElement, ReactNode, useEffect, useState} from "react";
import {Box, Tab, Tabs, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useAppSelector} from "../../hooks/store-hooks.ts";
import {updateCurrentTab, updatePageOrientation} from "./tabs-slice.ts";

const AboutUs = ()  => {

    return (
        <>
            <h3>What, where and when?</h3>
            <p>We are a small, friendly nursery offering a very high standard of child-care, located in Wapping (close to St. Katherine's Docks).</p>
            <p>We provide day-care from 8am to 6pm for children aged one to five years old - and offer 3 subsidised places for parents who meet certain criteria.</p>
            <p>We are OFSTED registered and provide the children with a structured daily routine with both free play</p>
            <p>We offer 3 subsidised places for parents who meet certain criteria.</p>
            <h3>It's a community thing</h3>
            <p>Being a community nursery means we are a not-for-profit organisation. This allows us to be highly competitive with our fees, but beyond that it means parents have a say in how the nursery is ran</p>
            <h3>What else?</h3>
            <ul>
                <li>Small numbers of children</li>
                <li>Good OFSTED report</li>
                <li>Fairly priced</li>
                <li>Home-cooked food</li>
                <li>High staff-child ratios</li>
                <li>Outside space - as seen on BBC's Garden Invaders</li>
            </ul>
        </>
    );
}

export default AboutUs;