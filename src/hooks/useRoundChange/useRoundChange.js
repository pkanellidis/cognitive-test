export const useRoundChange = (timedOut, startTime) => {
    const endTime = Date.now()
    if (!timedOut){
        clearTimeout(timeoutRef.current)
    }

    const success = ((option === NOGO) && timedOut) || ((option === GO) && !timedOut)
    setResults(prevState => {
        return [...prevState, [
            option,
            success ? 'Success' : "Failure",
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