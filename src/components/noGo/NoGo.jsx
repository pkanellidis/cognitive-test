import React from 'react'
import {red} from "@mui/material/colors";
import {Stack, Typography} from "@mui/material";
import {useSpring, animated} from "react-spring";

export const NoGo = (props) => {
    const from = {
        opacity: -1,
        left: -100,
    }

    const to = {
        opacity: 1,
        left: 0,
    }

    const styles = useSpring({
        from: from,
        to: to
    })

    return (
        <Stack>
            <animated.div style={styles}>
                <Typography textAlign="center"
                            variant="h1"
                            component="h1"
                            style={
                                {backgroundColor: red.A700}
                            }
                            color={"white"}>
                    No Go
                </Typography>
            </animated.div>
        </Stack>
    )
}