import React, { useState } from "react";
export default RunningExercise;

function RunningExercise() {
    const [laps, setLaps] = useState([]);

    const RecordLap = () => {
        const currentTime = new Date().toLocaleTimeString();
        setLaps([...laps, currentTime]);
    };
    // Lap Timer with Button
    return (
        <div>
            <button onClick={RecordLap}>Begin Lap</button>
            <ul>
                Lap Times:
                {laps.map((lap, index) => (
                    <li key={index}>{lap}</li>
                ))}
            </ul>
        </div>
    );
};


