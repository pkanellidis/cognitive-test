import {Stack, Typography} from "@mui/material";
import {green} from "@mui/material/colors";
import React from "react";


export const Go = (props) => {
    return (
        <Stack>
            <Typography textAlign="center" variant="h1" component="h1" color={green.A700}>
                Go
            </Typography>
        </Stack>
    )
}