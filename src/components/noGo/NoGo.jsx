import React from 'react'
import {red} from "@mui/material/colors";
import {Stack, Typography} from "@mui/material";

export const NoGo = (props) => {
    return (
        <Stack>
            <Typography textAlign="center" variant="h1" component="h1" color={red.A700}>
                No Go
            </Typography>
        </Stack>
    )
}