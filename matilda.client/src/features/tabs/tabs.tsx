import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/store-hooks.ts";
import { updateCurrentTab, updatePageOrientation } from "./tabs-slice.tsx";
import { Box, Tab, Tabs, Typography } from "@mui/material";

export function TabsAndContent() {

    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        dispatch(updateCurrentTab(newValue));
    };

    const TabPanel = (props: TabPanelProps) => {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                style={{ width: "100%", textAlign: "justify" }} // Removed fixed width
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    const dispatch = useDispatch();

    const switchOrientation = () => {
        const isVertical = window.innerHeight > window.innerWidth;
        dispatch(updatePageOrientation(isVertical ? 'horizontal' : 'vertical'));
    };

    window.addEventListener('resize', switchOrientation);

    const tabData = useAppSelector((state) => state.tabs.tabData);
    const orientation = useAppSelector((state) => state.tabs.pageOrientation);
    const currentTabId = useAppSelector((state) => state.tabs.currentTabId);

    function a11yProps(index: number) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    const xylophoneColors = ['#e57373', '#F06292', '#BA68C8', '#9575CD', '#7986CB', '#64B5F6', '#4FC3F7', '#4DD0E1', '#4DB6AC', '#81C784', '#AED581', '#DCE775', '#FFF176', '#FFD54F', '#FFB74D', '#FF8A65'];

    const tabs = (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: 'background.paper',
                display: 'flex',
                height: '100%',
                width: '100%',
                flexDirection: orientation === 'vertical' ? 'row' : 'column',
                '& .MuiTabs-flexContainer': {
                    alignItems: 'center', // Center tabs for a better look, adjust as needed
                },
                '& .MuiTab-root': {
                    // Basic styling for tabs to look like xylophone keys
                    // /backgroundColor: '#e57373', // Default color, consider making this dynamic
                    margin: '2px', // Space between keys
                    borderRadius: '5px', // Rounded edges
                    boxShadow: '0 3px 5px rgba(0,0,0,0.2)', // Subtle shadow for 3D effect
                    textTransform: 'none', // Keep text more natural, child-friendly
                    fontFamily: '"Comic Sans MS", cursive, sans-serif', // Choose a playful font
                    fontWeight: 'bold',
                    '&:hover': {
                        // Maintain the hover effect, perhaps brighten the color
                        backgroundColor: '#ff8a65',
                    },
                },
            }}
        >
            <Tabs
                orientation={orientation}
                variant="scrollable"
                value={currentTabId}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                    borderRight: 1,
                    borderColor: 'divider',
                    '& .MuiTab-root': { // Targeting the root of the Tab component for general styling
                        borderRadius: '10px', // Rounded corners
                        // backgroundColor: '#FFF', // Default background color, consider dynamically changing this per tab for the xylophone effect
                        marginRight: '8px', // Space between tabs to mimic xylophone bar separation
                        boxShadow: '0px 2px 4px rgba(0,0,0,0.1)', // Adding some shadow for depth
                        '&:hover': {
                            transform: 'scale(1.05)', // Slight scale up on hover
                            boxShadow: '0px 4px 8px rgba(0,0,0,0.2)', // Enhanced shadow on hover
                        },
                    },
                }}
            >
                {tabData.map((tab, index) => (
                    <Tab
                        label={tab.title}
                        key={tab.id}
                        sx={{
                            backgroundColor: xylophoneColors[index % xylophoneColors.length], // Cycle through colors
                            width: (20 + (index*2)) + '%'
                            // '&:hover': {
                            //     // backgroundColor: /* a slightly brighter or different shade of the base color */,
                            // }
                        }}
                        {...a11yProps(tab.id)}
                    />
                ))}

            </Tabs>
            {tabData.map((tab) => (
                <TabPanel value={currentTabId} key={tab.id} index={tab.id}>
                    {tab.content ? tab.content : (<><label>{tab.title}</label><p>I am some tab contents</p></>)}
                </TabPanel>
            ))}
        </Box>
    );

    return tabs;
}
