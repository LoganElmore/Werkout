import { useState } from 'react'
export default function RepetitionExercise({ name }) {
    let [count, setCount] = useState(0)
    return (
        <>
            <h1>{name} - Core Training Exercise</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count => count + 1)}>Add Rep</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}