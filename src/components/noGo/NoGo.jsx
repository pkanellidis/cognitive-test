import React from 'react'
import {red} from "@mui/material/colors";
import {useSpring, animated} from "react-spring";

export const NoGo = (props) => {
    const from = {
        opacity: -1,
        left: -100,
        height: "100px",
        backgroundColor: red.A700
    }

    const to = {
        opacity: 1,
        left: 0,
        height: "100px",
        backgroundColor: red.A700
    }

    const styles = useSpring({
        from: from,
        to: to
    })

    return (
        <animated.div style={styles}>

        </animated.div>
    )
}