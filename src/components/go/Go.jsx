import {Stack, Typography} from "@mui/material";
import {green} from "@mui/material/colors";
import React from "react";
import {useSpring, animated} from "react-spring";


export const Go = ({id}) => {

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
        <animated.div style={styles}>
            <Stack>
                    <Typography textAlign="center"
                                variant="h1"
                                component="h1"
                                color={"white¸"}
                                style={{backgroundColor: green.A700}}>
                        Go
                    </Typography>
            </Stack>
        </animated.div>
    )
}