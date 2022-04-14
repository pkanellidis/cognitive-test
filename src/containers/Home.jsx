import {Button, Divider, Paper, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";

export const Home = (props) => {
    return (
        <Paper style={{padding: "8px"}}>
            <Stack spacing={3}>
                <Typography variant={"h3"}>
                    Welcome to our Cognitive Test
                </Typography>
                <Typography variant={"h4"}>
                    You can take the test by clicking the button below. At the
                    end of the test the results will be available.
                </Typography>
                <Typography variant={"h5"}>
                    Rules:
                </Typography>
                <Typography variant={"h5"}>
                    - When the Green Box appears, tap the Space Key as soon as possible
                </Typography>
                <Typography variant={"h5"}>
                    - When the Red Box appears, don't do anything until the box changes
                </Typography>
                <Divider/>
                <Link to="/game" style={{textDecoration: "none"}} >
                    <Button variant="contained">Start Test</Button>
                </Link>
                <Link to="/demo" style={{textDecoration: "none"}} >
                    <Button variant="contained">Start Demo</Button>
                </Link>
            </Stack>
        </Paper>
    )
}