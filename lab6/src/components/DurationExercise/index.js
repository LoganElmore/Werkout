import { useEffect, useState } from "react"
export default function DurationExercise({ name }) {

    let [startTime, setStartTime] = useState(new Date(0))
    let [frame, setFrame] = useState(0)
    useEffect(() =>
        setInterval(() => {
            setFrame(frame => frame + 1)
            console.log("Frame")
        },
            30), [])
    let currentTime = new Date()
    let elapsedTime = undefined
    if (startTime.valueOf() !== 0) {
        elapsedTime = new Date(currentTime.valueOf() - startTime.valueOf())
    } else {
        elapsedTime = new Date()
    }
    return (
        <>
            <h1>Exercise: {name}</h1>
            <p>Timer: {String(startTime.getMinutes()).padStart(2, '0',)}:{startTime.getSeconds()}.{startTime.getMilliseconds}</p>
            <button onClick={() => setStartTime(new Date())}>Start</button>
            <button onClick={() => setStartTime(new Date(0))}>Reset</button>
        </>
    )
}