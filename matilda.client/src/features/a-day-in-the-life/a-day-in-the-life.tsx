import {Icon, Typography} from "@mui/material";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import {useAppSelector} from "../../hooks/store-hooks";
import {ITimeLineItem, TimelineIcon} from "./timeline-slice";

const ADayInTheLife = ()  => {

    const timelineData = useAppSelector((state) => state.timeline.timelimeItems);

    const timelineEvents = (events: string[]) => {return events.map((e, _index) => {
            return (<Typography key={_index}>{e}</Typography>)
                })};

    const getIcon = (icon: TimelineIcon) => {
        switch(icon){
            case "BreakfastDiningIcon":{
                return (<BreakfastDiningIcon/>);
            }
        }
    }

    const tl = (timelineItem: ITimeLineItem, timeSide: 'left'|'right') => (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{m: 'auto 0'}}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                {timeSide == 'left' ? timelineItem.time : timelineEvents(timelineItem.events)}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector/>
                <TimelineDot color="primary">
                    {
                        getIcon(timelineItem.icon)
                    }
                    {/*<BreakfastDiningIcon/>*/}
                </TimelineDot>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent sx={{py: '12px', px: 2}}>
                {timeSide == 'right' ? timelineItem.time : timelineEvents(timelineItem.events)}
            </TimelineContent>
        </TimelineItem>
    );

    return (
        timelineData.map((item, _index) => {
            return tl(item, _index % 2 !== 0 ? 'left' : 'right')
        })
    );

}

export default ADayInTheLife;
