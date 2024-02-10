import React, {ReactElement, ReactNode, useEffect, useState} from "react";
import {Box, Button, Grid, Tab, Tabs, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useAppSelector} from "../../hooks/store-hooks.ts";
import {updateCurrentTab, updatePageOrientation} from "./tabs-slice.ts";
import BasicCard from "../shared/card.tsx";

const Contact = ()  => {

    const address = (
        <>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Address
        </Typography>
    <Typography variant="h5" component="div">
        Matilda Day Nursery
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
        St Katharines Way
        <br/>
        London
        <br/>
        E1W 1LQ
    </Typography>
            </>
    );

    const emailAddress = (
        <>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Email Address
            </Typography>
            <Typography variant="h5" component="div">
                matildanursery@aol.com
            </Typography>

        </>
    );

    const whereAreWe = (
        <><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Where are we?
        </Typography>
            <iframe className="actAsDiv" style={{width: '100%', height:'100%'}} src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;q=Matilda%20Day%20Nursery%2C%20St%20Katharines%20Way%2C%20London%2C%20E1Q%201LQ&amp;aq=0&amp;ie=UTF8&amp;t=m&amp;z=12&amp;iwloc=A&amp;output=embed"></iframe>

        </>
    );

    const contactUs = (
        <><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Contact Us
        </Typography>
            <iframe className="actAsDiv" style={{width: '100%', height:'100%'}} src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;q=Matilda%20Day%20Nursery%2C%20St%20Katharines%20Way%2C%20London%2C%20E1Q%201LQ&amp;aq=0&amp;ie=UTF8&amp;t=m&amp;z=12&amp;iwloc=A&amp;output=embed"></iframe>

        </>
    );


    const phoneNumber = (
        <>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Phone Number
            </Typography>
            <Typography variant="h5" component="div">
                020 7480 6396
            </Typography>

        </>
    );

    const addressAction = (
        <Button size="small">Learn More</Button>
    )

    return (
        <>
            {/*<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',gap: '20px'}}>*/}
            <Grid container spacing={2} style={{ width: '100%', margin: 0 }}> {/* Remove margin added by default */}
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <BasicCard content={address} action={addressAction} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <BasicCard content={phoneNumber} action={addressAction} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <BasicCard content={emailAddress} action={addressAction} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <BasicCard content={whereAreWe} action={addressAction} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <BasicCard content={contactUs} action={addressAction} />
                </Grid>

            </Grid>
        </>
    );
}

export default Contact;