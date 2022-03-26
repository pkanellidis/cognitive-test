import {Button, Paper, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";

export const Home = (props) => {
    return (
        <Paper style={{padding: "8px"}}>
            <Stack spacing={3}>
                <Typography variant={"h3"}>
                    Welcome to our Impulsiveness Test
                </Typography>
                <Typography variant={"h4"}>
                    You can take the test by clicking the button below, at the
                    end of the test the results will be available
                </Typography>
                <Link to="/game" style={{textDecoration: "none"}} >
                    <Button variant="contained">Start Test</Button>
                </Link>
            </Stack>
        </Paper>
    )
}