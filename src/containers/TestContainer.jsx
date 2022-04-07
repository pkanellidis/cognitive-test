import React, {useEffect, useRef, useState} from 'react'
import {Button, Card, Divider, Stack, Typography} from "@mui/material";
import {Go} from "../components/go/Go";
import {NoGo} from "../components/noGo/NoGo";
import {useEventListener} from "../hooks/useEventListener/useEventListener";
import CSVDownload from "react-csv/src/components/Download";

const GO = 'GO'
const NOGO = 'NOGO'
const keyCode = 'Space'
// const roundOptions = ["GO","NOGO","GO","GO","GO","NOGO","NOGO","GO","GO",
//     "NOGO","GO","GO","NOGO","GO","GO","GO","GO","GO","GO","GO","GO","GO",
//     "GO","NOGO","GO","NOGO","GO","GO","GO","GO","GO","GO","GO","NOGO","GO",
//     "GO","GO","GO","GO","NOGO","NOGO","GO","GO","GO","GO","NOGO","GO","GO",
//     "NOGO","NOGO","GO","GO","NOGO","GO","NOGO","NOGO","GO","GO","GO","GO",
//     "GO","GO","GO","GO","NOGO","NOGO","GO","GO","GO","GO","GO","GO","GO","NOGO",
//     "NOGO","NOGO","GO","GO","GO","GO","NOGO","GO","GO","GO","NOGO","GO","GO","GO",
//     "GO","NOGO","NOGO","GO","GO","NOGO","GO","GO","GO","GO","GO","GO","GO","GO","NOGO",
//     "NOGO","GO","GO","GO","GO","GO","GO","GO","GO","NOGO","GO","NOGO","GO","GO","NOGO",
//     "NOGO","GO","GO","GO","NOGO","GO","GO","GO","GO","GO","GO","GO","GO","GO","GO","GO",
//     "NOGO","GO","NOGO","GO","GO","NOGO","GO","GO","NOGO","GO","GO","GO","GO","NOGO","GO",
//     "NOGO","GO","GO","GO","NOGO","GO","GO","GO","GO","GO","GO","NOGO","NOGO","GO","GO","GO",
//     "GO","GO","GO","GO","NOGO","GO","GO","NOGO","GO","NOGO","GO","GO","GO","GO","GO","NOGO",
//     "GO","GO","NOGO","GO","GO","GO","GO","GO","NOGO","GO","GO","NOGO","GO","GO","GO","NOGO",
//     "GO","GO","GO","NOGO","GO","GO","GO","GO","GO","NOGO","NOGO","GO","GO","GO","GO","GO","GO",
//     "GO","GO","GO","GO","NOGO","NOGO"]

const roundOptions = ["GO", "NOGO", "GO"]

export const TestContainer = () => {
    const [currentRound, setCurrentRound] = useState(1)
    const timeoutRef = useRef()
    const startTime = useRef()

    const isGameOver = currentRound === roundOptions.length + 1

    const option = roundOptions[currentRound - 1]

    const handleInput = (key) => {
        if (key.code === keyCode){
            handleChange(false, startTime.current)
        }
    }

    useEventListener('keydown', handleInput)

    const handleChange = (timedOut, startTime) => {
        if (isGameOver) {
            return
        }
        const endTime = Date.now()
        clearTimeout(timeoutRef.current)

        setResults(prevState => {
            return [...prevState, [
                option,
                option === GO ? 'Success' : "Failure",
                timedOut ? "-" : `=""${((Math.abs(endTime - startTime)) / 1000)}""`
            ]]
        })

        setCurrentRound((prevRound) => prevRound + 1)
    }

    const handleTimeout = (option) => {
        setResults(prevState => {
            return [...prevState, [
                option,
                option === NOGO ? 'Success' : "Failure",
                "-"
            ]]
        })

        setCurrentRound((prevRound) => prevRound + 1)

    }

    const [results, setResults] = useState([["Type", "Result", "Reaction Time"]])

    useEffect(() => {
        if (!isGameOver){
            startTime.current = Date.now()
            timeoutRef.current = setTimeout(() => {
                handleTimeout(option)
            }, 2000)
        }

        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, [currentRound, isGameOver, option])

    const gameRound = (
        <Card style={{padding: "8px"}}>
            <br/>
            {option === GO ? (<Go key={currentRound}/>) : (<NoGo key={currentRound}/>)}
            <br/>
        </Card>
    )

    const gameOver = (
        <Card style={{padding: "8px"}}>
            <Stack spacing={3}>
                <Typography textAlign={"center"} variant="h2">
                    Game over, you will soon be prompted to download the results
                </Typography>

                <CSVDownload data={results}>
                    <Button variant={"contained"}>Download Results</Button>
                </CSVDownload>
            </Stack>
        </Card>
    )

    return (
        <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
        >
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {isGameOver ? gameOver : gameRound}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </Stack>
    )
}

// ~TODO: Remove countdownFix
