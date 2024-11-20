import React from "react";
import {Paper, Stack, styled} from "@mui/material";
import {xylophoneColors} from "../../global-constants/constants.ts";

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 800,
    // height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    fontFamily: "'Comic Sans MS', sans-serif",
    color: 'black',
    fontWeight: 'bold',
    border:'solid black',
    borderRadius: '5px', // Rounded edges
    boxShadow: '0 3px 5px rgba(0,0,0,0.2)',                    // Subtle shadow for 3D effect
    textShadow: '2px 2px 4px white',
    // fontWeight: 'bold',
    '&:hover': {
        // Maintain the hover effect, perhaps brighten the color
        backgroundColor: '#ff8a65',
    },
}));

const AboutUs = ()  => {
    return (
        <Stack direction="column" spacing={2}>
            <DemoPaper square={false} sx={{backgroundColor: xylophoneColors[Math.floor(Math.random() * xylophoneColors.length)],}}>
                <h3>What, where and when?</h3>
                <p>We are a small, friendly nursery offering a very high standard of child-care, located in Wapping (close to St. Katherine's Docks).</p>
                <p>We provide day-care from 8am to 6pm for children aged one to five years old - and offer 3 subsidised places for parents who meet certain criteria.</p>
                <p>We are OFSTED registered and provide the children with a structured daily routine with both free play</p>
                <p>We offer 3 subsidised places for parents who meet certain criteria.</p>
            </DemoPaper>
            <DemoPaper square={false} sx={{backgroundColor: xylophoneColors[Math.floor(Math.random() * xylophoneColors.length)]}}>
                <h3>It's a community thing</h3>
                <p>Being a community nursery means we are a not-for-profit organisation. This allows us to be highly competitive with our fees, but beyond that it means we are parent-led: <br/>Our parents are on the nursery committee which means they have a say in how their child is looked after.</p>
            </DemoPaper>
            <DemoPaper square={false} sx={{backgroundColor: xylophoneColors[Math.floor(Math.random() * xylophoneColors.length)]}}>
                <h3>What else?</h3>
                <ul>
                    <li>Small numbers of children</li>
                    <li>Good OFSTED report</li>
                    <li>Fairly priced</li>
                    <li>Home-cooked food</li>
                    <li>High staff-child ratios</li>
                    <li>Outside space - as seen on BBC's Garden Invaders</li>
                    </ul>
            </DemoPaper>
        </Stack>
    );
    // return (
    //     <>
    //         <h3>What else?</h3>
    //         <ul>
    //             <li>Small numbers of children</li>
    //             <li>Good OFSTED report</li>
    //             <li>Fairly priced</li>
    //             <li>Home-cooked food</li>
    //             <li>High staff-child ratios</li>
    //             <li>Outside space - as seen on BBC's Garden Invaders</li>
    //         </ul>
    //     </>
    // );
}

export default AboutUs;
