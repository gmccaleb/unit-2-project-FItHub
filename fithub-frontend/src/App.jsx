import "./App.css";
import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";

import Home from "./components/Pages/Home";
import ExerciseLibrary from "./components/Pages/ExerciseLibrary";
import LogWorkout from "./components/Pages/LogWorkout";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./components/Pages/About";
import WorkoutSubmitted from "./components/Pages/WorkoutSubmitted";
import WorkoutHistory from "./components/Pages/WorkOutHistory";


function App() {
  // Initialize workout history from localStorage or empty array if there is nothing in storage
  const [workoutHistory, setWorkoutHistory] = useState(() => {
    const saved = localStorage.getItem("workoutHistory");
    // return what is saved in local storage, if nothing is saved then return empty array
    return saved ? JSON.parse(saved) : [];
  });

  // Updates localStorage whenever workoutHistory changes
  useEffect(() => {
    localStorage.setItem("workoutHistory", JSON.stringify(workoutHistory));
  }, [workoutHistory]);

  return (
    <>
      <div className="app-container">
        <Header />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Exercise-Library" element={<ExerciseLibrary />} />
            <Route
              path="/Log-Workout"
              element={
                <LogWorkout
                  workoutHistory={workoutHistory}
                  setWorkoutHistory={setWorkoutHistory}
                />
              }
            />
            <Route path="/Workout-Submitted" element={<WorkoutSubmitted />} />
            {/* Pass history state to WorkoutHistory */}
            <Route
              path="/Workout-History"
              element={
                <WorkoutHistory
                  workoutHistory={workoutHistory}
                  setWorkoutHistory={setWorkoutHistory}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
