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

    const tabs = (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: 'background.paper',
                display: 'flex',
                height: 224, // Consider making this relative or auto-adjusting
                width: '100%',
                flexDirection: orientation === 'vertical' ? 'row' : 'column'
            }}
        >
            <Tabs
                orientation={orientation}
                variant="scrollable"
                value={currentTabId}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                {tabData.map((tab) => (
                    <Tab label={tab.title} key={tab.id} {...a11yProps(tab.id)} />
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
