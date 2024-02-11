import {Card, CardActions, CardContent} from "@mui/material";

export default function BasicCard({ content, action,  }) {
    return (
        <Card>
            <CardContent>
                {content}
            </CardContent>
            <CardActions>
                {action}
            </CardActions>
        </Card>
    );
}