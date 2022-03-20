import React, {useEffect, useRef, useState} from 'react'
import {Button, Card, Divider, Stack, Typography} from "@mui/material";
import {Go} from "../components/go/Go";
import {NoGo} from "../components/noGo/NoGo";
import {useEventListener} from "../hooks/useEventListener/useEventListener";
import CSVDownload from "react-csv/src/components/Download";

const GO = 'GO'
const NOGO = 'NOGO'
const keyCode = 'Space'

export const TestContainer = () => {
    const [remainingGo, setRemainingGo] = useState(3) //154
    const [remainingNoGo, setRemainingNoGo] = useState(2) //66
    const options = [GO, NOGO]
    const timeoutRef = useRef()

    const remainingRounds = remainingGo + remainingNoGo
    const isGameOver = remainingRounds === 0

    let randomIndex = Math.floor(Math.random() * options.length);
    if (remainingGo === 0 && remainingNoGo > 0){
        randomIndex = 1
    }
    else if (remainingGo > 0 && remainingNoGo === 0) {
        randomIndex = 0
    }

    const option = options[randomIndex]

    const handleInput = (key) => {
        if (key.code === keyCode){
            handleChange(false)
        }
    }

    useEventListener('keydown', handleInput)

    const handleChange = (timedOut) => {
        if (!timedOut){
            clearTimeout(timeoutRef.current)
        }

        const success = ((option === NOGO) && timedOut) || ((option === GO) && !timedOut)
        setResults(prevState => {
            return [...prevState, [
                option,
                success ? 'Success' : "Failure"
            ]]
        })

        if (option === GO){
            setRemainingGo((prevGo) => prevGo - 1)
        }
        else {
            setRemainingNoGo((prevNoGo) => prevNoGo - 1)
        }
    }


    const [results, setResults] = useState([["Type", "Result"]])

    useEffect(() => {
        if (!isGameOver){
            timeoutRef.current = setTimeout(() => {
                handleChange(true)
            }, 2000)
        }
    }, [remainingGo, remainingNoGo, isGameOver])

    const gameRound = (
        <Card style={{padding: "8px"}}>
            <Typography textAlign={"center"} variant="h2">Remaining Rounds {remainingRounds}</Typography>
            <Divider/>
            {option === GO ? (<Go/>) : (<NoGo/>)}
        </Card>
    )

    const gameOver = (
        <Card style={{padding: "8px"}}>
            <Stack spacing={3}>
                <Typography textAlign={"center"} variant="h2">
                    Game over, you can view and download the results below
                </Typography>

                <CSVDownload data={results}>
                    <Button variant={"contained"}>Download Results</Button>
                </CSVDownload>
            </Stack>
        </Card>
    )

    return (
        <Stack>
            {isGameOver ? gameOver : gameRound}
        </Stack>
    )
}