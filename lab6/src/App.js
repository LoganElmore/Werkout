import logo from './logo.svg';
import './App.css';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';
import RunningExercise from './components/RunningExercise'; // Running Exercise component imported into App.js
import { useState } from 'react';

function App() {
  const exerciseList = [
    { name: "Core Training", type: "repetition" },
    { name: "Cardio", type: "duration" },
    { name: "Twerking", type: "duration" },
    { name: "Running", type: "running" }, // New running exercise added into Lab 5 List
  ];
  const [currentExercise, setCurrentExercise] = useState(undefined);
  let currentScreen;

  if (currentExercise === undefined) {
    currentScreen = (
      <>
        <h2>Welcome to Werkout</h2>
        <p>Choose your exercise:</p>
        <p>
          <button onClick={() => setCurrentExercise(exerciseList[0])}>Core Training</button>
        </p>
        <p>
          <button onClick={() => setCurrentExercise(exerciseList[1])}>Cardio</button>
        </p>
        <p>
          <button onClick={() => setCurrentExercise(exerciseList[2])}>Twerk Time</button>
        </p>
        <p>
          <button onClick={() => setCurrentExercise(exerciseList[3])}>Running</button>
        </p>
      </>
    );
  } else if (currentExercise.type === "duration") {
    currentScreen = (
      <>
        <DurationExercise name={currentExercise.name} />
        <button onClick={() => setCurrentExercise(undefined)}>Return</button>
      </>
    );
  } else if (currentExercise.type === "running") {
    currentScreen = (
      <>
        <RunningExercise name={currentExercise.name} />
        <button onClick={() => setCurrentExercise(undefined)}>Return</button>
      </>
    );
  } else {
    currentScreen = (
      <>
        <RepetitionExercise name={currentExercise.name} return={() => setCurrentExercise(undefined)} />
        <button onClick={() => setCurrentExercise(undefined)}>Return</button>
      </>
    );
  }
  return currentScreen;
}

export default App;
