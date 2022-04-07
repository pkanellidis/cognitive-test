import {green} from "@mui/material/colors";
import React from "react";
import {useSpring, animated} from "react-spring";


export const Go = ({id}) => {

    const from = {
        opacity: -1,
        left: -100,
        backgroundColor: green.A700,
        height: "100px"
    }

    const to = {
        opacity: 1,
        left: 0,
        backgroundColor: green.A700,
        height: "100px"
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