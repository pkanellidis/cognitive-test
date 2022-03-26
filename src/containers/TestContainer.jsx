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
    const [remainingGo, setRemainingGo] = useState(154) //154
    const [remainingNoGo, setRemainingNoGo] = useState(66) //66
    const options = [GO, NOGO]
    const timeoutRef = useRef()
    const startTime = useRef()

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
            handleChange(false, startTime.current)
        }
    }

    useEventListener('keydown', handleInput)

    const handleChange = (timedOut, startTime) => {
        const endTime = Date.now()
        clearTimeout(timeoutRef.current)

        setResults(prevState => {
            return [...prevState, [
                option,
                option === GO ? 'Success' : "Failure",
                timedOut ? "-" : `=""${((Math.abs(endTime - startTime)) / 1000)}""`
            ]]
        })

        if (option === GO){
            setRemainingGo((prevGo) => prevGo - 1)
        }
        else {
            setRemainingNoGo((prevNoGo) => prevNoGo - 1)
        }
    }

    const handleTimeout = (option) => {
        setResults(prevState => {
            return [...prevState, [
                option,
                option === NOGO ? 'Success' : "Failure",
                "-"
            ]]
        })

        if (option === GO){
            setRemainingGo((prevGo) => prevGo - 1)
        }
        else {
            setRemainingNoGo((prevNoGo) => prevNoGo - 1)
        }
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
    }, [remainingGo, remainingNoGo, isGameOver, option])

    const gameRound = (
        <Card style={{padding: "8px"}}>
            <Typography textAlign={"center"} variant="h2">Remaining Rounds {remainingRounds}</Typography>
            <Divider/>
            {option === GO ? (<Go key={remainingRounds}/>) : (<NoGo key={remainingRounds}/>)}
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
        <Stack>
            {isGameOver ? gameOver : gameRound}
        </Stack>
    )
}

// ~TODO: Remove countdownFix
